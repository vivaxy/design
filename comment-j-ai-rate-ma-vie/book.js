// TODO load image before display
$(document).ready(function () {
    $.fn.fullpage({
        slidesColor: ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2'],
        anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
        menu: '#menu'
    });
});
$("img").ready(function () {
    $("img").each(function () {
        if (this.height / this.width > window.innerHeight / window.innerWidth) {
            this.height = window.innerHeight;
        } else {
            this.width = window.innerWidth;
        }
    });
});
