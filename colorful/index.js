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

const createButton = ({ defaultValue, validator, onChange, buttonText, action, input }) => {

  const button = document.createElement('button');
  button.classList.add('number-input-button');
  button.textContent = buttonText;

  let previousValue = defaultValue;
  let timeout = null;
  let interval = null;
  const doAction = () => {
    const v = action(Number(input.value));
    if (validator(v)) {
      previousValue = v;
      input.value = String(v);
      onChange(v);
    }
  };
  const touchStartHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    button.focus();
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      interval = setInterval(() => {
        doAction();
      }, 50);
    }, 100);
  };
  const touchEndHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    doAction();
  };
  const handlerOptions = { passive: false };
  button.addEventListener('touchstart', touchStartHandler, handlerOptions);
  button.addEventListener('touchend', touchEndHandler, handlerOptions);
  button.addEventListener('touchcancel', touchEndHandler, handlerOptions);
  return button;
};

const createInput = ({ labelText, defaultValue, onChange, validator }) => {
  const input = document.createElement('input');
  input.type = 'number';
  input.inputmode = 'numeric';
  input.id = labelText;
  input.value = defaultValue;
  input.value = String(defaultValue);
  input.classList.add('number-input-input');

  let previousValue = defaultValue;
  input.addEventListener('change', () => {
    const value = Number(input.value);
    if (!validator(value)) {
      input.value = String(previousValue);
      return;
    }
    if (value !== previousValue) {
      previousValue = value;
      onChange(previousValue);
    }
  });
  input.addEventListener('focus', () => {
    setTimeout(() => {
      input.type = 'text';
      input.setSelectionRange(0, input.value.length);
      input.type = 'number';
    }, 0);
  });

  const label = document.createElement('label');
  label.textContent = labelText;
  label.for = labelText;
  label.classList.add('number-input-label');

  const minusButton = createButton({
    defaultValue,
    validator,
    onChange,
    action: (v) => {
      return v - 1;
    },
    buttonText: '-',
    input,
  });

  const plusButton = createButton({
    defaultValue,
    validator,
    onChange,
    action: (v) => {
      return v + 1;
    },
    buttonText: '+',
    input,
  });

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
  const defaultDimensions = { width: 1280, height: 1280 };
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
