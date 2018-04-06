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

const createInput = ({ labelText, defaultValue, onChange, validator }) => {
  const input = document.createElement('input');
  input.type = 'number';
  input.id = labelText;
  input.value = defaultValue;
  let previousValue = defaultValue;
  input.addEventListener('change', () => {
    const value = Number(input.value);
    if (!validator(value)) {
      input.value = String(previousValue);
    }
    if (value !== previousValue) {
      previousValue = value;
      onChange(previousValue);
    }
  });
  input.value = String(defaultValue);
  input.classList.add('number-input-input');

  const label = document.createElement('label');
  label.textContent = labelText;
  label.for = labelText;
  label.classList.add('number-input-label');

  const minusButton = document.createElement('button');
  minusButton.addEventListener('click', () => {
    const v = Number(input.value) - 1;
    if (validator(v)) {
      previousValue = v;
      input.value = String(v);
      onChange(v);
    }
  });
  minusButton.classList.add('number-input-button');
  minusButton.textContent = '-';

  const plusButton = document.createElement('button');
  plusButton.addEventListener('click', () => {
    const v = Number(input.value) + 1;
    if (validator(v)) {
      previousValue = v;
      input.value = String(v);
      onChange(v);
    }
  });
  plusButton.classList.add('number-input-button');
  plusButton.textContent = '+';

  const container = document.createElement('div');
  container.appendChild(label);
  container.appendChild(minusButton);
  container.appendChild(input);
  container.appendChild(plusButton);
  container.classList.add('number-input-container');
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
  const colorValidator = (v) => {
    return v >= 0 && v <= 255 && parseInt(v) === v;
  };
  const dimensionValidator = (v) => {
    return v > 0 && parseInt(v) === v;
  };
  body.appendChild(createInput({
    labelText: 'R',
    onChange: (r) => {
      updateBodyBackgroundColor({ r });
    },
    validator: colorValidator,
    defaultValue: colors.r,
  }));
  body.appendChild(createInput({
    labelText: 'G',
    onChange: (g) => {
      updateBodyBackgroundColor({ g });
    },
    validator: colorValidator,
    defaultValue: colors.g,
  }));
  body.appendChild(createInput({
    labelText: 'B',
    onChange: (b) => {
      updateBodyBackgroundColor({ b });
    },
    validator: colorValidator,
    defaultValue: colors.b,
  }));
  body.appendChild(createInput({
    labelText: 'Width',
    onChange: (width) => {
      updateDimensions({ width });
    },
    validator: dimensionValidator,
    defaultValue: dimensions.width,
  }));
  body.appendChild(createInput({
    labelText: 'Height',
    onChange: (height) => {
      updateDimensions({ height });
    },
    validator: dimensionValidator,
    defaultValue: dimensions.height,
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
    image.classList.add('download-image');
    image.addEventListener('click', () => {
      body.removeChild(image);
    });
    body.appendChild(image);
  });
  download.classList.add('download-button');

  body.appendChild(download);
};

appendInput();
appendDownload();
setBackgroundColor(body, colors);
