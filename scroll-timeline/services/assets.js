/**
 * @since 2018-12-06 15:46
 * @author vivaxy
 */

import * as ET from '../enums/event-types.js';
import RenderImage from '../class/render-image.js';

function init(e) {

  const assets = {
    watch: {
      url: 'assets/watch.png',
      x: 0,
      y: -50,
    },
    talk: {
      url: 'assets/talk.png',
      x: 130,
      y: 50,
      vx: 0.5,
    },
    pointer1: {
      url: 'assets/pointer1.png',
      x: 437,
      y: 35,
      vangle: 0.000001,
      transformOriginX: 437,
      transformOriginY: 35,
    },
    // pointer2: {
    //   url: 'assets/pointer2.png',
    //   x: 100,
    //   y: 100,
    // },
  };

  for (let name in assets) {
    assets[name] = new RenderImage(assets[name]);
  }

  e.on(ET.ASSETS_PRELOAD_PROGRESS, (et, ed) => {
    if (ed.loaded === ed.total) {
      e.emit(ET.ADD_RENDER_LAYERS, [
        assets.watch,
        // assets.talk,
        assets.pointer1, // assets.pointer2
      ]);
    }
  });

  e.on(ET.PAGE_LOAD, () => {
    e.emit(ET.ADD_PRELOAD_ASSETS, assets);
  });

  e.on(ET.TIMELINE_UPDATE, (et, { time, delta }) => {
    for (let name in assets) {
      assets[name].x += delta * assets[name].vx;
      assets[name].y += delta * assets[name].vy;
      assets[name].angle += delta * assets[name].vangle;
    }
  });

}

export default { init };
