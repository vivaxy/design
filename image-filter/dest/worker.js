(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @since 15-09-06 09:42
 * @author vivaxy
 */
'use strict';

self.addEventListener('message', function (e) {
    var data = e.data;
    var savedColorChanges = data.savedColorChanges;
    var imageData = data.imageData;

    var map = Array.prototype.map.call(imageData.data, function (v, i) {
        return v * savedColorChanges[i % 4] / 100;
    });
    var imageDataResult = map.map(function (v, i, array) {
        var colorStart = i - i % 4;
        var color = Array.prototype.slice.call(array, colorStart, colorStart + 4);
        var averageColor = (color[0] + color[1] + color[2]) * color[3] / 3 / 255;
        var colorDiff = averageColor - v;
        return v + colorDiff * savedColorChanges[4] / 100;
    });
    self.postMessage({
        imageData: imageDataResult,
        width: imageData.width,
        height: imageData.height
    });
}, false);
},{}]},{},[1]);
