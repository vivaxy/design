/**
 * @since 20180402 14:15
 * @author vivaxy
 */

const composeColor = ({ r, g, b }) => {
  return `rgb(${r}, ${g}, ${b})`;
};

const setBackgroundColor = (el, { r, g, b }) => {
  el.style.background = composeColor({ r, g, b });
};

const createInput = ({ labelText, onChange }) => {
  const input = document.createElement('input');
  input.type = 'number';
  input.id = labelText;
  let previousValue = colors[labelText.toLowerCase()];
  input.addEventListener('change', () => {
    const value = Number(input.value);
    if (value < 0 || value > 255) {
      input.value = String(previousValue);
    }
    if (value !== previousValue) {
      previousValue = value;
      onChange(previousValue);
    }
  });
  input.value = String(previousValue);

  const label = document.createElement('label');
  label.textContent = labelText;
  label.for = labelText;

  const container = document.createElement('div');
  container.appendChild(label);
  container.appendChild(input);
  container.classList.add('color-input-c');
  return container;
};

const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getColor = () => {
  const defaultColors = { r: 0, g: 0, b: 0 };
  const storedColors = JSON.parse(localStorage.getItem('colors'));
  if (storedColors) {
    return storedColors;
  }
  save('colors', defaultColors);
  return defaultColors;
};

const getDimensions = () => {
  const defaultDimensions = { width: 1024, height: 1024 };
  const storedDimensions = JSON.parse(localStorage.getItem('dimensions'));
  if (storedDimensions) {
    return storedDimensions;
  }
  save('dimensions', defaultDimensions);
  return defaultDimensions;
};

const body = document.body;
let colors = getColor();
let dimensions = getDimensions();

const updateBodyBackgroundColor = (data) => {
  colors = { ...colors, ...data };
  save('colors', colors);
  setBackgroundColor(body, colors);
};

const updateDimensions = (data) => {
  dimensions = { ...dimensions, ...data };
  save('dimensions', dimensions);
};

const appendInput = () => {
  body.appendChild(createInput({
    labelText: 'R', onChange: (r) => {
      updateBodyBackgroundColor({ r });
    }
  }));
  body.appendChild(createInput({
    labelText: 'G', onChange: (g) => {
      updateBodyBackgroundColor({ g });
    }
  }));
  body.appendChild(createInput({
    labelText: 'B', onChange: (b) => {
      updateBodyBackgroundColor({ b });
    }
  }));
  body.appendChild(createInput({
    labelText: 'Width', onChange: (width) => {
      updateDimensions({ width });
    }
  }));
  body.appendChild(createInput({
    labelText: 'Height', onChange: (height) => {
      updateDimensions({ height });
    }
  }));
};

const appendDownload = () => {
  const download = document.createElement('button');
  download.textContent = 'Download';
  download.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = composeColor(colors);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const image = document.createElement('img');
    image.src = canvas.toDataURL('image/png');
    image.addEventListener('click', () => {
      body.removeChild(image);
    });
    body.appendChild(image);
  });
  body.appendChild(download);
};

appendInput();
appendDownload();
setBackgroundColor(body, colors);
