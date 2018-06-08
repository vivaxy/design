/**
 * @since 20180608 09:58
 * @author vivaxy
 */

import Sphere from './sphere.js';
import Tag from './tag.js';

const sphereRadius = 200;

const imageNames = ['不倒翁', '冰陀螺', '围棋', '国际象棋', '头戴式耳机',
  '手柄', '扑克', '拼图', '摇杆', '毽子', '气球', '水枪', '游戏卡', '玻璃球',
  '积木', '耳机', '话筒', '象棋', '赛车', '风车', '飞镖', '麻将'];

const sphere = new Sphere({ sphereRadius });
imageNames.map(addTag);

function addTag(imageName, index, items) {
  const zAngle = Math.pow(index - items.length / 2, 3) / 300;
  const yAngle = index * Math.PI * 2 / items.length * 3.3;
  const tag = new Tag({ zAngle, yAngle, imageSrc: './images/' + imageName + '.png', yAngleSpeed: 0.03 });
  sphere.addTag(tag);
}
