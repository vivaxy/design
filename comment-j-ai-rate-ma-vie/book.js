$(document).ready(function () {
    $('#full-page').fullpage();
});

var $img = $('img');
$img.ready(function () {
    var width = $img.width(),
        height = $img.height();
    if (height / width > window.innerHeight / window.innerWidth) {
        $img.height(window.innerHeight);
    } else {
        $img.width(window.innerWidth);
    }
});
