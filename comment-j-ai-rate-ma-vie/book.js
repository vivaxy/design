$(document).ready(function () {
    $('#full-page').fullpage();
    var $img = $('img');
    if ($img.width() / $img.height() > window.innerWidth / window.innerHeight) {
        $img.css('width', '100%');
    } else {
        $img.css('height', '100%');
    }
});
