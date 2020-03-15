/**
 * @since 15-09-06 09:28
 * @author vivaxy
 */
class Loading {
  constructor(container = document.querySelector('loading')) {
    this.container = container;
  }

  show() {
    this.container.classList.remove('hide');
  }

  hide() {
    this.container.classList.add('hide');
  }
}

export default Loading;
