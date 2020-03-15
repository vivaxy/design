/**
 * @since 2020-03-15 03:02
 * @author vivaxy
 */
export function parse(input) {
  const div = document.createElement('div');
  div.style.font = input;
  return {
    fontStyle: div.style.fontStyle,
    fontVariant: div.style.fontVariant,
    fontWeight: div.style.fontWeight,
    fontSize: div.style.fontSize,
    lineHeight: div.style.lineHeight,
    fontFamily: div.style.fontFamily,
  };
}

export function serialize({
  fontStyle,
  fontVariant,
  fontWeight,
  fontSize,
  lineHeight,
  fontFamily,
} = {}) {
  const div = document.createElement('div');
  div.style.fontStyle = fontStyle;
  div.style.fontVariant = fontVariant;
  div.style.fontWeight = fontWeight;
  div.style.fontSize = fontSize;
  div.style.lineHeight = lineHeight;
  div.style.fontFamily = fontFamily;
  return div.style.font;
}
