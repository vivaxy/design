/**
 * @since 20180402 14:15
 * @author vivaxy
 */

const setBackgroundColor = (el, { r, g, b }) => {
  el.style.background = `rgb(${r}, ${g}, ${b})`;
};

const createColorInput = ({ labelText, onChange }) => {
  const input = document.createElement('input');
  input.type = 'number';
  input.id = labelText;
  let previousValue = '0';
  input.addEventListener('change', () => {
    const value = input.value;
    if (value < 0 || value > 255) {
      input.value = previousValue;
    }
    if (input.value !== previousValue) {
      previousValue = input.value;
      onChange(previousValue);
    }
  });
  input.value = previousValue;

  const label = document.createElement('label');
  label.textContent = labelText;
  label.for = labelText;

  const container = document.createElement('div');
  container.appendChild(label);
  container.appendChild(input);
  container.classList.add('color-input-c');
  return container;
};

const saveColors = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getColor = () => {
  const defaultColors = { r: 0, g: 0, b: 0 };
  const storedColors = JSON.parse(localStorage.getItem('colors'));
  if (storedColors) {
    return storedColors;
  }
  saveColors('colors', defaultColors);
  return defaultColors;
};

const body = document.body;
let colors = getColor();

const updateBodyBackgroundColor = (data) => {
  colors = { ...colors, ...data };
  saveColors('colors', colors);
  setBackgroundColor(body, colors);
};

const appendInput = () => {
  body.appendChild(createColorInput({
    labelText: 'R', onChange: (r) => {
      updateBodyBackgroundColor({ r });
    }
  }));
  body.appendChild(createColorInput({
    labelText: 'G', onChange: (g) => {
      updateBodyBackgroundColor({ g });
    }
  }));
  body.appendChild(createColorInput({
    labelText: 'B', onChange: (b) => {
      updateBodyBackgroundColor({ b });
    }
  }));
};

appendInput();
setBackgroundColor(body, colors);
