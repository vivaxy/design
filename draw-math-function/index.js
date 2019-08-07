const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * window.devicePixelRatio;
canvas.style.width = window.innerWidth + 'px';
canvas.height = (window.innerHeight - 60) * window.devicePixelRatio;
canvas.style.height = window.innerHeight - 60 + 'px';

const fInput = document.getElementById('fInput');
const fButton = document.getElementById('fButton');
const fShowGrid = document.getElementById('fShowGrid');
const fShowCoordinate = document.getElementById('fShowCoordinate');
const fRatioChange = document.getElementById('fRatioChange');
const fGrid = document.getElementById('fGrid');
const fCoordinate = document.getElementById('fCoordinate');

const exdate = new Date();
exdate.setDate(exdate.getDate() + 365);

const f = {
  x: 0,
  y: 0,
  ratio: 200,
  ratioChange: 1.1,
  showGrid: getCookie('showGrid'),
  showCoordinate: getCookie('showCoordinate'),
};

const mouse = {};

fShowGrid.value = (f.showGrid && 'Grid') || 'Grid';
fShowCoordinate.value = (f.showCoordinate && 'Axis') || 'Axis';
fButton.addEventListener('click', redraw);
fShowGrid.addEventListener('click', function() {
  f.showGrid = 1 - f.showGrid;
  document.cookie =
    'showGrid=' + f.showGrid + ';expires=' + exdate.toGMTString();
  fShowGrid.value = (f.showGrid && 'Grid') || 'Grid';
  redraw();
});
fShowCoordinate.addEventListener('click', function() {
  f.showCoordinate = 1 - f.showCoordinate;
  document.cookie =
    'showCoordinate=' + f.showCoordinate + ';expires=' + exdate.toGMTString();
  fShowCoordinate.value = (f.showCoordinate && 'Axis') || 'Axis';
  redraw();
});
fRatioChange.addEventListener('mouseup', function() {
  f.ratioChange = fRatioChange.value;
});

canvas.onmousewheel = function(e) {
  scrollFunc(e);
  e.preventDefault();
};
canvas.onmousedown = function(e) {
  canvas.style.cursor = "url('assets/closedhand.cur'),auto";
  const { x, y } = getMousePosition(e);
  mouse.startX = x;
  mouse.startY = y;
  f.startX = f.x;
  f.startY = f.y;
  canvas.onmousemove = function(e) {
    mouseMove(e);
    e.preventDefault();
  };
  canvas.onmouseup = function() {
    canvas.style.cursor = "url('assets/openhand.cur'),auto";
    canvas.onmousemove = function(e) {
      defaultMouseMove(e);
    };
  };
};
canvas.onmousemove = function(e) {
  defaultMouseMove(e);
};

redraw();

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    const c_start = document.cookie.indexOf(c_name);
    if (c_start !== -1) {
      const c_end = document.cookie.indexOf(';', c_start);
      const returnInt = parseInt(
        document.cookie.substring(c_start + c_name.length + 1, c_end),
      );
      if (!isNaN(returnInt)) {
        return returnInt;
      }
    }
  }
  return 1;
}

function toCx(fx) {
  return canvas.width / 2 + (fx + f.x) * f.ratio;
}

function toCy(fy) {
  return canvas.height / 2 - (fy + f.y) * f.ratio;
}

function toFx(cx) {
  return (cx - canvas.width / 2) / f.ratio - f.x;
}

function toFy(cy) {
  return (canvas.height / 2 - cy) / f.ratio - f.y;
}

function drawBackground() {
  ctx.fillStyle = '#ecf0f1';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawGrid() {
  ctx.strokeStyle = '#bdc3c7';
  const gridSize =
    Math.pow(10, 1 - Math.floor(Math.log(f.ratio) / Math.LN10)) * 2;
  for (
    let fx = Math.ceil(toFx(0) / gridSize);
    fx <= Math.floor(toFx(canvas.width) / gridSize);
    fx++
  ) {
    const cx = toCx(fx * gridSize);
    ctx.beginPath();
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, canvas.height);
    ctx.stroke();
  }
  for (
    let fy = Math.ceil(toFy(0) / gridSize);
    fy >= Math.floor(toFy(canvas.height) / gridSize);
    fy--
  ) {
    const cy = toCy(fy * gridSize);
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(canvas.width, cy);
    ctx.stroke();
  }
  fGrid.innerHTML = String(gridSize);
}

function drawCoordinate() {
  ctx.strokeStyle = '#7f8c8d';
  const cy = toCy(0);
  ctx.beginPath();
  ctx.moveTo(0, cy);
  ctx.lineTo(canvas.width, cy);
  ctx.stroke();
  const cx = toCx(0);
  ctx.beginPath();
  ctx.moveTo(cx, 0);
  ctx.lineTo(cx, canvas.height);
  ctx.stroke();
}

function drawPoint(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 1, y + 1);
  ctx.stroke();
}

function drawF() {
  try {
    f.function = new Function('x', 'return ' + fInput.value + ';');
  } catch (e) {
    console.log(e);
  }
  ctx.strokeStyle = '#000000';
  for (let cx = 0; cx < canvas.width; cx++) {
    try {
      const cy = toCy(f.function(toFx(cx)));
      drawPoint(cx, cy);
    } catch (ex) {
      alert(ex.message);
    }
  }
}

function redraw() {
  drawBackground();
  f.showGrid && drawGrid();
  f.showCoordinate && drawCoordinate();
  drawF();
}

function scrollFunc(e) {
  updateMousePosition(e);
  let dir = 0;
  if (e.wheelDelta) {
    dir = e.wheelDelta;
  } else if (e.detail) {
    // Firefox
    dir = -e.detail;
  }
  if (dir > 0) {
    f.ratio = Math.min(f.ratio * f.ratioChange, 1e16);
    console.log(f.ratio);
    f.x =
      f.x -
      (toFx(mouse.x) * f.ratioChange +
        f.x * f.ratioChange -
        (toFx(mouse.x) - toFx(canvas.width / 2)));
    f.y =
      f.y -
      (toFy(mouse.y) * f.ratioChange +
        f.y * f.ratioChange -
        (toFy(mouse.y) - toFy(canvas.height / 2)));
  }
  if (dir < 0) {
    f.ratio = Math.max(f.ratio / f.ratioChange, 1e-16);
    console.log(f.ratio);
    f.x =
      f.x -
      (toFx(mouse.x) / f.ratioChange +
        f.x / f.ratioChange -
        (toFx(mouse.x) - toFx(canvas.width / 2)));
    f.y =
      f.y -
      (toFy(mouse.y) / f.ratioChange +
        f.y / f.ratioChange -
        (toFy(mouse.y) - toFy(canvas.height / 2)));
  }
  redraw();
}

function mouseMove(e) {
  updateMousePosition(e);
  f.x = f.startX + (mouse.x - mouse.startX) / f.ratio;
  f.y = f.startY - (mouse.y - mouse.startY) / f.ratio;
  redraw();
}

function defaultMouseMove(e) {
  updateMousePosition(e);
  fCoordinate.innerText =
    '(' +
    toFx(mouse.x).toFixed(Math.log10(f.ratio)) +
    ', ' +
    toFy(mouse.y).toFixed(Math.log10(f.ratio)) +
    ')';
}

function getMousePosition(e) {
  return {
    x: (e.offsetX || e.layerX - canvas.offsetLeft) * window.devicePixelRatio,
    y: (e.offsetY || e.layerY - canvas.offsetTop) * window.devicePixelRatio,
  };
}

function updateMousePosition(e) {
  const { x, y } = getMousePosition(e);
  mouse.x = x;
  mouse.y = y;
}
