/**
 * @since 2020-07-22 11:04
 * @author vivaxy
 */
const $canvas = document.querySelector('#canvas');
const roadImage = new Image();
roadImage.src = './road.png';
roadImage.addEventListener('load', main);

const fragments = [];

class Fragment {
  constructor() {
    this.startScale = 0.05;
    this.speed = 1e-2;
    this.roadLength = 667;
    this.paddingTop = 116;
    this.width = 375;
    this.height = 272.67;

    const $img = document.createElement('img');
    $img.src = roadImage.src;
    $img.style.width = '100%';
    $img.style.paddingTop = `${this.paddingTop}px`;

    const $container = document.createElement('div');
    $container.style.position = 'absolute';
    $container.style.width = this.width + 'px';
    $container.style.height = this.height + 'px';
    $container.appendChild($img);

    // const $markerLeft = document.createElement('div');
    // $markerLeft.style.transform = 'rotate(-58deg) translate(0, -410px)';
    // $markerLeft.style.position = 'absolute';
    // $markerLeft.style.width = '1000px';
    // $markerLeft.style.height = '1px';
    // $markerLeft.style.background = 'black';
    // $container.appendChild($markerLeft);

    // const $markerRight = document.createElement('div');
    // $markerRight.style.transform = 'rotate(58deg) translate(0px, 120px)';
    // $markerRight.style.position = 'absolute';
    // $markerRight.style.width = '1000px';
    // $markerRight.style.height = '1px';
    // $markerRight.style.background = 'black';
    // $container.appendChild($markerRight);

    // const $markerTop = document.createElement('div');
    // $markerTop.style.position = 'absolute';
    // $markerTop.style.width = '1000px';
    // $markerTop.style.height = '1px';
    // $markerTop.style.top = '130px';
    // $markerTop.style.background = 'black';
    // $container.appendChild($markerTop);

    this.$container = $container;
    this.createTime = Date.now();
    this.lastTime = this.createTime;
    this.scale = this.startScale;

    this.setStyle();
    $canvas.prepend($container);
  }

  animate() {
    this.scale *= 1 + this.speed;
    this.setStyle();
  }

  setStyle() {
    this.$container.style.transform = `scale(${this.scale})`;
    this.$container.style.transformOrigin = 'center top';
  }

  shouldDestroy() {
    // when road image is out of the screen
    return this.scale * this.paddingTop > this.roadLength;
  }

  shouldAddNewFragment() {
    return this.scale >= this.startScale * 2.06;
  }

  destroy() {
    $canvas.removeChild(this.$container);
  }
}

function animate() {
  fragments.forEach(function(fragment) {
    fragment.animate();
  });
  if (fragments.length === 0 || fragments[0].shouldAddNewFragment()) {
    fragments.unshift(new Fragment());
  }
  if (fragments.length > 0 && fragments[fragments.length - 1].shouldDestroy()) {
    fragments.pop().destroy();
  }
}

function main() {
  if (window.stop !== true) {
    animate();
  }
  requestAnimationFrame(main);
}
