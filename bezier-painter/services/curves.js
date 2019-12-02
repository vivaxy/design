/**
 * @since 20180614 11:10
 * @author vivaxy
 */
import Curve from '../class/curve.js';
import * as eventTypes from '../enums/event-types.js';
import * as layerIndexes from '../enums/layer-indexes.js';

function init(events) {
  const curves = [];
  let activeCurve = null;
  let startingNewCurve = null;
  let startingHitCurve = null;
  let startingPos = null;
  let startingPointInfo = null;

  events.on(eventTypes.ON_RENDER_PREPARING, onRenderPreparing);
  events.on(eventTypes.ON_DRAG_START, onDragStart);
  events.on(eventTypes.ON_DRAG_MOVE, onDragMove);
  events.on(eventTypes.ON_DRAG_END, onDragEnd);
  events.on(eventTypes.DELETE, onDelete);
  events.on(eventTypes.CLEAR, onClear);

  function onRenderPreparing(eventId, eventData) {
    curves.forEach((curve) => {
      if (curve.active) {
        eventData.layers.push({
          layerIndex: layerIndexes.ACTIVE_CURVE,
          actions: curve.render(),
        });
      } else {
        eventData.layers.push({
          layerIndex: layerIndexes.CURVE,
          actions: curve.render(),
        });
      }
    });
  }

  function onDragStart(eventId, eventData) {
    const startingHitCurveInfo = getHitCurve(eventData.startingPoint);

    if (startingHitCurveInfo) {
      if (startingHitCurveInfo.type === 'curve') {
        startingHitCurve = startingHitCurveInfo.curve;
        if (activeCurve) {
          activeCurve.setActive(false);
        }
        startingHitCurve.setActive(true);
        // tobe dragged
        startingPos = {
          p1: { ...startingHitCurve.p1 },
          cp1: { ...startingHitCurve.cp1 },
          p2: { ...startingHitCurve.p2 },
          cp2: { ...startingHitCurve.cp2 },
        };
      } else if (
        startingHitCurveInfo.type === 'p1' ||
        startingHitCurveInfo.type === 'p2' ||
        startingHitCurveInfo.type === 'cp1' ||
        startingHitCurveInfo.type === 'cp2'
      ) {
        startingPointInfo = {
          type: startingHitCurveInfo.type,
          curve: startingHitCurveInfo.curve,
          p1: { ...startingHitCurveInfo.p1 },
          p2: { ...startingHitCurveInfo.p2 },
          cp1: { ...startingHitCurveInfo.cp1 },
          cp2: { ...startingHitCurveInfo.cp2 },
        };
      }
    } else {
      if (activeCurve) {
        activeCurve.setActive(false);
      }
      startingNewCurve = new Curve({
        p1: eventData.startingPoint,
        cp1: eventData.startingPoint,
        cp2: eventData.startingPoint,
        p2: eventData.startingPoint,
      });
      curves.push(startingNewCurve);
    }

    events.emit(eventTypes.APPLY_RENDER);
  }

  function onDragMove(eventId, eventData) {
    if (startingPointInfo) {
      // drag point
      movePoint(eventData);
    } else if (startingHitCurve) {
      // drag curve
      moveCurve(eventData);
    } else {
      if (startingNewCurve) {
        startingNewCurve.setP2(eventData.currentPoint);
        startingNewCurve.setCp2(eventData.currentPoint);
      }
    }
    events.emit(eventTypes.APPLY_RENDER);
  }

  function onDragEnd(eventId, eventData) {
    if (
      eventData.currentPoint.x === eventData.startingPoint.x &&
      eventData.currentPoint.y === eventData.startingPoint.y
    ) {
      if (startingPointInfo) {
        // assume as user hit the curve
        startingHitCurve = startingPointInfo.curve;
        startingPointInfo = null;
      }
      if (startingHitCurve) {
        if (activeCurve) {
          // change selection
          startingHitCurve.setActive(false);
          activeCurve.setActive(true);
          trySelectAnotherCurve(eventData.startingPoint);
        } else {
          // select
          startingHitCurve.setActive(true);
          activeCurve = startingHitCurve;
        }
        startingHitCurve = null;
      } else if (startingNewCurve) {
        // remove added new curve
        curves.splice(curves.indexOf(startingNewCurve), 1);
        if (activeCurve) {
          activeCurve.setActive(true);
        }
        startingNewCurve = null;
      } else {
        // deselect
        activeCurve.setActive(false);
        activeCurve = null;
      }
    } else {
      if (startingPointInfo) {
        movePoint(eventData);
        startingPointInfo = null;
      } else if (startingHitCurve) {
        // drag startingHitCurve
        moveCurve(eventData);
        activeCurve = startingHitCurve;
        startingHitCurve = null;
      } else if (startingNewCurve) {
        activeCurve = startingNewCurve;
        startingNewCurve = null;
      }
    }

    saveDataSnapshot();

    events.emit(eventTypes.APPLY_RENDER);
  }

  function onDelete() {
    if (activeCurve) {
      activeCurve.setActive(false);
      curves.splice(curves.indexOf(activeCurve), 1);
      activeCurve = null;
    }

    events.emit(eventTypes.APPLY_RENDER);
  }

  function onClear() {
    if (activeCurve) {
      activeCurve.setActive(false);
      activeCurve = null;
    }
    while (curves.length) {
      curves.pop();
    }

    events.emit(eventTypes.APPLY_RENDER);
  }

  function getHitCurve(coord) {
    for (let i = 0; i < curves.length; i++) {
      const info = curves[i].isInCurve(coord);
      if (info) {
        return {
          ...info,
          curve: curves[i],
        };
      }
    }
    return null;
  }

  function trySelectAnotherCurve(coord) {
    let curveIndex = -1;
    for (let i = 0; i < curves.length; i++) {
      if (!curves[i].active && curves[i].isInCurve(coord)) {
        curveIndex = i;
        break;
      }
    }
    if (curveIndex !== -1) {
      const curve = curves[curveIndex];
      // change curve index, to loop the selection
      curves.splice(curveIndex, 1);
      curves.push(curve);
      activeCurve.setActive(false);
      curve.setActive(true);
      activeCurve = curve;
    }
  }

  function moveCurve(eventData) {
    startingHitCurve.move(
      eventData.currentPoint,
      eventData.startingPoint,
      startingPos,
    );
  }

  function movePoint(eventData) {
    const startingPos = startingPointInfo[startingPointInfo.type];
    const diffPos = {
      x: eventData.currentPoint.x - eventData.startingPoint.x,
      y: eventData.currentPoint.y - eventData.startingPoint.y,
    };
    const newPos = addPos(startingPos, diffPos);
    if (startingPointInfo.type === 'p1') {
      startingPointInfo.curve.setP1(newPos);
      startingPointInfo.curve.setCp1(addPos(startingPointInfo.cp1, diffPos));
    } else if (startingPointInfo.type === 'p2') {
      startingPointInfo.curve.setP2(newPos);
      startingPointInfo.curve.setCp2(addPos(startingPointInfo.cp2, diffPos));
    } else if (startingPointInfo.type === 'cp1') {
      startingPointInfo.curve.setCp1(newPos);
    } else if (startingPointInfo.type === 'cp2') {
      startingPointInfo.curve.setCp2(newPos);
    }
  }

  function addPos(a, b) {
    return { x: a.x + b.x, y: a.y + b.y };
  }

  function saveDataSnapshot() {}
}

export default { init };
