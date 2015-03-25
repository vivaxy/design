/**
 * @since 150216 09:44
 * @author vivaxy
 */

var ele = document.querySelector('.test');

var style1 = {
    left: '0%',
    top: '0%'
};

var style2 = {
    left: '90%',
    top: '90%'
};

var toggleStyle = function () {
    new Tween(ele, style1, style2, 1000).play(toggleStyle);
    //new Tween(ele, style1, style2, 1000, toggleStyle).play();
    var temp = style1;
    style1 = style2;
    style2 = temp;
};

toggleStyle();
