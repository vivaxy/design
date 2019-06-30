// set mobile events
var mobileCheck = function() {
  var check = false;
  (function(a) {
    if (
      /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        a,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4),
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
var clickEvent = mobileCheck() ? 'touchstart' : 'click';
// set css prefix
var getCssName = function(name) {
  var prefixes = ['', '-webkit-', '-ms-', '-moz-'];
  var target = document.documentElement.style;
  for (var i = 0; i < prefixes.length; i++) {
    var test = prefixes[i] + name;
    if (test in target) {
      return test;
    }
  }
  return null;
};
// set names
var btn = document.getElementById('anim');
var menu = Array.prototype.slice.call(document.querySelectorAll('.menu'));
var body = document.getElementsByClassName('body')[0];
// set main colors
var lightColor = '26, 188, 156';
var darkColor = '22, 160, 133';
var css = document.styleSheets[0];
var addCss = function(sheet, selectorText, cssText, position) {
  var pos = position || sheet.cssRules.length;
  if (sheet.insertRule) {
    sheet.insertRule(selectorText + '{' + cssText + '}', pos);
  } else if (sheet.addRule) {
    //IE
    sheet.addRule(selectorText, cssText, pos);
  }
};
addCss(css, '#anim', 'background: rgb(' + lightColor + ');');
addCss(css, '#anim:hover', 'background: rgb(' + darkColor + ');');
addCss(
  css,
  '.body .h',
  'color: rgb(' +
    lightColor +
    '); text-shadow: 0px 0px 1px rgba(' +
    lightColor +
    ', 0.5);',
);
// set menu colors
var color = [
  'rgb(52, 152, 219)',
  'rgb(231, 76, 60)',
  'rgb(155, 89, 182)',
  'rgb(46, 204, 113)',
  'rgb(26, 188, 156)',
  'rgb(52, 73, 94)',
  'rgb(241, 196, 15)',
  'rgb(230, 126, 34)',
];
for (var i in menu) {
  addCss(
    css,
    '.menu-open' + i + '',
    'cursor: pointer; background: ' + color[i] + '',
  );
}
// set transform
var transform = getCssName('transform');
var deg = 50 / menu.length;
var scale = 0.4 / menu.length;
for (i in menu) {
  addCss(
    css,
    '.menu' + i,
    'z-index: -' +
      i +
      '; ' +
      transform +
      ': translate3d(' +
      -i * 100 +
      'px,' +
      -i * 60 +
      'px,0) rotate3d(1,2,-1,' +
      (i * deg + 10) +
      'deg) scale3d(' +
      (0.6 - i * scale) +
      ',' +
      (0.6 - i * scale) +
      ',' +
      (0.6 - i * scale) +
      ');',
  );
}
// define scroll function
var scrollFunc = function(e) {
  var dir = 0;
  if (e.wheelDelta) {
    dir = e.wheelDelta;
  } else if (e.detail) {
    //Firefox
    dir = -e.detail;
  }
  menu.forEach(function(e, i) {
    e.classList.remove('menu' + i);
  });
  if (dir > 0) {
    menu[menu.length - 1].classList.add('b2f');
    menu.unshift(menu.pop());
    menu.forEach(function(e, i) {
      if (i != 0) {
        e.classList.add('menu-move');
        e.classList.add('menu' + i);
      }
    });
  }
  if (dir < 0) {
    menu[0].classList.add('f2b');
    menu.push(menu.shift());
    menu.forEach(function(e, i) {
      if (i != menu.length - 1) {
        e.classList.add('menu-move');
        e.classList.add('menu' + i);
      }
    });
  }
  removeScroll();
  setTimeout(addScroll, 500);
};
var addScroll = function() {
  menu.forEach(function(e, i) {
    e.classList.remove('b2f');
    e.classList.remove('f2b');
    e.classList.remove('menu-move');
    e.classList.add('menu' + i);
  });
  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', function(e) {
      scrollFunc(e);
      return false;
    }); //Firefox
  }
  document.onmousewheel = function(e) {
    scrollFunc(e);
    return false;
  };
};
var removeScroll = function() {
  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', function(e) {
      return false;
    }); //Firefox
  }
  document.onmousewheel = function(e) {
    return false;
  };
};
// set button click
addCss(
  css,
  '.menu-on',
  'z-index: 1; ' +
    transform +
    ': translate3d(0,0,0) rotate3d(0,0,0,0deg) scale3d(1,1,1);',
);
btn.addEventListener(
  clickEvent,
  function(e) {
    body.classList.add('body-open');
    menu.forEach(function(e, i) {
      e.classList.add('menu-open' + i);
      e.addEventListener(clickEvent, function() {
        e.classList.add('menu-move');
        e.classList.remove('menu' + i);
        e.classList.add('menu-on');
        setTimeout(function() {
          document.location = xmlDoc
            .getElementsByTagName('menu')[0]
            .getElementsByTagName('link')[i].childNodes[0].nodeValue;
        }, 500);
      });
    });
    addScroll();
    setTimeout(function() {
      document.body.removeChild(body);
    }, 500);
  },
  false,
);
menu.forEach(function(e, i) {
  e.classList.add('menu' + i);
});
