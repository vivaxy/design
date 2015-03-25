/**
 * @since 2014/9/24 10:04
 * @author vivaxy
 * based on http://tympanus.net/codrops/2014/09/23/animated-background-headers/
 */
var Snow = function () {
    var circles = [];
    var canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext('2d');
    var width, height, heavy;
    var heavyInc = true;
    var Circle = function () {
        var _circle = this;
        this.pos = {};
        var init = function () {
            _circle.pos.x = Math.random() * width;
            _circle.pos.y = Math.random() * 100;
            _circle.alpha = heavy + Math.random() * 0.3;
            _circle.scale = heavy + Math.random() * 0.3;
            _circle.velocity = Math.random();
        };
        this.draw = function () {
            if (this.alpha <= 0) {
                init();
            }
            this.pos.y += this.velocity;
            this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.scale * 10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,' + this.alpha + ')';
            ctx.fill();
        };
        init();
    };
    var animate = function () {
        if (heavyInc) {
            heavy += 0.001;
            if (heavy > 0.5) heavyInc = false;
        } else {
            heavy -= 0.001;
            if (heavy < 0) heavyInc = true;
        }
        ctx.clearRect(0, 0, width, height);
        for (var i in circles) {
            circles[i].draw();
        }
        requestAnimationFrame(animate, null);
    };
    var resize = function () {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };

    heavy = 0;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    for (var i = 0; i < canvas.width / 2; i++) {
        var c = new Circle();
        circles.push(c);
    }
    animate();
    window.addEventListener("resize", resize, false);
};

new Snow();