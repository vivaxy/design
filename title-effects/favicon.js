/**
 * @since 150508 14:44
 * @author vivaxy
 */
var favicon = {
    add: function(options) {
      var canvas = document.createElement('canvas'),
        head = document.head,
        linkTag = document.createElement('link'),
        ctx = canvas.getContext('2d');

      canvas.height = canvas.width = 32;
      ctx.fillStyle = options.backgroundColor;

      //ctx.fillRect(0, 0, 32, 32);
      ctx.arc(16, 16, 16, 0, 2 * Math.PI);
      ctx.fill();

      ctx.textAlign = 'center';
      ctx.font = '22px "helvetica", sans-serif';
      ctx.fillStyle = options.textColor;
      ctx.fillText(options.text, 16, 24);

      // append
      linkTag.setAttribute('rel', 'shortcut icon');
      linkTag.setAttribute('type', 'image/png');
      linkTag.setAttribute('href', canvas.toDataURL('image/png'));
      head.appendChild(linkTag);
    },
    remove: function() {
      Array.prototype.slice
        .call(document.querySelectorAll('link[rel~=shortcut]'))
        .forEach(function(favicon) {
          document.head.removeChild(favicon);
        });
    },
  },
  faviconCount = 0,
  faviconToggle,
  interval,
  bind = function() {
    flash.addEventListener('click', function() {
      clearInterval(interval);
      interval = setInterval(function() {
        faviconToggle = !faviconToggle;
        favicon.remove();
        var backgroundColor = faviconToggle ? '#e74c3c' : 'rgba(0, 0, 0, 0)',
          textColor = faviconToggle ? '#fff' : 'rgba(0, 0, 0, 0)';
        favicon.add({
          text: faviconCount,
          textColor: textColor,
          backgroundColor: backgroundColor,
        });
      }, 400);
    });
    count.addEventListener('click', function() {
      clearInterval(interval);
      interval = setInterval(function() {
        faviconCount++;
        favicon.remove();
        favicon.add({
          text: faviconCount,
          textColor: '#fff',
          backgroundColor: '#e74c3c',
        });
      }, 300);
    });
  };

bind();
