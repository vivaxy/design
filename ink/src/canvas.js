/**
 * @since 15-09-03 10:59
 * @author vivaxy
 */
'use strict';
import Dip from './dip.js';
import setStyle from './set-style.js';
import isMobile from './is-mobile.js';
import getTouchPosition from './get-touch-position.js';

class Canvas {
    constructor() {
        this._createCanvas().setDip({
            r: 255,
            g: 0,
            b: 0,
            a: 1
        })._bindEvents();
    }

    _createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setStyle(canvas, {
            display: 'block',
            width: '100%',
            height: '90%',
            position: 'absolute',
            top: 0,
            left: 0
        });
        document.body.appendChild(canvas);
        this.canvas = canvas;
        return this;
    }

    setDip(color) {
        delete this.dip;
        this.dip = new Dip({
            ctx: this.canvas.getContext('2d'),
            color: color
        });
        return this;
    }

    _bindEvents() {
        let _this = this;

        let canvas = this.canvas;
        let startEvent = isMobile ? 'touchstart' : 'mousedown';
        let moveEvent = isMobile ? 'touchmove' : 'mousemove';
        let endEvent = isMobile ? 'touchend' : 'mouseup';
        let cancelEvent = isMobile ? 'touchcancel' : 'mouseout';

        let lastPosition = {};
        let saveTimeout = null;

        let moveHandler = (e) => {
            e.preventDefault();
            let position = getTouchPosition(e);
            this.dip.paint(lastPosition, position);
            lastPosition = position;
            clearTimeout(saveTimeout);
        };

        let endHandler = (e) => {
            e.preventDefault();
            lastPosition = getTouchPosition(e);
            canvas.removeEventListener(moveEvent, moveHandler, false);
            clearTimeout(saveTimeout);
        };

        let startHandler = (e) => {
            e.preventDefault();
            lastPosition = getTouchPosition(e);
            canvas.addEventListener(moveEvent, moveHandler, false);
            saveTimeout = setTimeout(_this._saveCanvas.bind(_this), 1000);
        };

        canvas.addEventListener(startEvent, startHandler, false);
        canvas.addEventListener(endEvent, endHandler, false);
        canvas.addEventListener(cancelEvent, endHandler, false);
        return this;
    }

    _saveCanvas() {
        let canvas = this.canvas;
        
        let overlay = document.createElement('div');
        setStyle(overlay, {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.8)'
        });
        
        let downloadButton = document.createElement('a');
        setStyle(downloadButton, {
            margin: '40% 5% 0',
            background: '#fff',
            borderRadius: '2px',
            display: 'block',
            height: '60px',
            lineHeight: '60px',
            color: '#000',
            textDecoration: 'none',
            textAlign: 'center'
        });
        downloadButton.textContent = 'download `ink.png`';
        downloadButton.target = '_blank';
        downloadButton.download = 'ink.png';
        downloadButton.href = canvas.toDataURL('image/png');
        
        overlay.appendChild(downloadButton);
        overlay.addEventListener(isMobile ? 'touchend' : 'click', ()=> {
            document.body.removeChild(overlay);
        }, false);
        document.body.appendChild(overlay);
    }
}

export default Canvas;
