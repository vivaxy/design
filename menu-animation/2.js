// set mobile events
var mobileCheck = function () {
    var check = false;
    (function (a) {
        if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
var clickEvent = mobileCheck() ? "touchstart" : "click";
// set css prefix
var getCssName = function (name) {
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
// set variables
var btn = document.getElementById("anim");
var menu = document.getElementsByClassName("menu")[0];
var body = document.getElementsByClassName("body")[0];
// set colors
var menuBgColor = "149, 165, 166";
var lightColor = "231, 76, 60";
var darkColor = "192, 57, 43";
var css = document.styleSheets[0];
var addCss = function (sheet, selectorText, cssText, position) {
    var pos = position || sheet.cssRules.length;
    if (sheet.insertRule) {
        sheet.insertRule(selectorText + "{" + cssText + "}", pos);
    } else if (sheet.addRule) {//IE
        sheet.addRule(selectorText, cssText, pos);
    }
};
addCss(css, ".menu", "background: rgb(" + menuBgColor + ");");
addCss(css, ".menu ul li a", "background: rgb(" + lightColor + ");");
addCss(css, "#anim", "background: rgb(" + lightColor + ");");
addCss(css, ".menu ul li a:hover", "background: rgb(" + darkColor + ");");
addCss(css, "#anim:hover", "background: rgb(" + darkColor + ");");
addCss(css, ".body .h", "color: rgb(" + lightColor + "); text-shadow: 0px 0px 1px rgba(" + lightColor + ", 0.5);");
//set a effects
var transition = getCssName("transition");
var transform = getCssName("transform");
var a = Array.prototype.slice.call(document.querySelectorAll(".menu>ul>li>a"));
var interval = 0.4 / a.length;
for (var i in a) {
    addCss(css, ".a-open" + i, transition + ": background 0.5s, " + transform + " " + (0.5 - interval * i) + "s " + (interval * i) + "s;");
}
addCss(css, ".a-close", transition + ": " + transform + " 0s 0.5s;");
// set events
var open = function (e) {
    menu.classList.add('menu-open');
    body.classList.add('body-open');
    a.forEach(function (e, i) {
        e.classList.remove("a-close");
        e.classList.add("a-open" + i);
    });
    body.addEventListener(clickEvent, close, false);
    e.stopPropagation();
    e.preventDefault();
};
var close = function (e) {
    menu.classList.remove('menu-open');
    body.classList.remove('body-open');
    a.forEach(function (e, i) {
        e.classList.remove("a-open" + i);
        e.classList.add("a-close");
    });
    body.removeEventListener(clickEvent, close, false);
    e.stopPropagation();
};
btn.addEventListener(clickEvent, open, false);
menu.addEventListener(clickEvent, close, false);