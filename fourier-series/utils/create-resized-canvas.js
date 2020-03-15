/**
 * @since 2020-03-15 02:14
 * @author vivaxy
 */
export default function createResizedCanvasRenderingContext2D(context, ratio) {
  console.assert(context, 'Invalid context');
  console.assert(ratio, 'Invalid ratio');

  const getHandlers = {
    font(target) {},
  };

  return new Proxy(ctx, {
    get(target, name) {
      return target[name];
    },
    set(target, name, value) {
      return (target[name] = value);
    },
  });
}
