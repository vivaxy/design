/**
 * @since 15-09-04 12:26
 * @author vivaxy
 */
'use strict';
let image = new Image();
image.src = './index.jpg';
image.addEventListener('load', ()=> {
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
}, false);