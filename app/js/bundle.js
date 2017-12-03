(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _message = require('./modules/message');

var _create = require('./modules/create');

var messages = {
	bodyMessage: (0, _message.message)('Check the Console!'),
	consoleMessage: (0, _message.message)('App Works!')
};

console.info(messages.consoleMessage);
document.addEventListener("DOMContentLoaded", function () {
	document.body.innerHTML = '<h1>' + messages.bodyMessage + '</h1>';
});

},{"./modules/create":2,"./modules/message":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var create = exports.create = 5;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.message = message;
function message(x) {
    return x;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGJhYmVsXFxhcHAuanMiLCJhcHBcXGJhYmVsXFxtb2R1bGVzXFxjcmVhdGUuanMiLCJhcHBcXGJhYmVsXFxtb2R1bGVzXFxtZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7QUFFQSxJQUFNO2NBQ1Esc0JBREcsQUFDSCxBQUFRLEFBQ3JCO2lCQUFnQixzQkFGakIsQUFBaUIsQUFFQSxBQUFRO0FBRlIsQUFDaEI7O0FBSUQsUUFBQSxBQUFRLEtBQUssU0FBYixBQUFzQjtBQUN0QixTQUFBLEFBQVMsaUJBQVQsQUFBMEIsb0JBQW9CLFlBQVUsQUFDdkQ7VUFBQSxBQUFTLEtBQVQsQUFBYyxxQkFBbUIsU0FBakMsQUFBMEMsY0FDMUM7QUFGRDs7Ozs7Ozs7QUNUTyxJQUFNLDBCQUFOLEFBQWU7Ozs7Ozs7O1EsQUNBTixVLEFBQUE7QUFBVCxTQUFBLEFBQVMsUUFBVCxBQUFpQixHQUFHLEFBQ3ZCO1dBQUEsQUFBTyxBQUNWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7bWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2UnO1xyXG5pbXBvcnQge2NyZWF0ZX0gZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZSc7XHJcblxyXG5jb25zdCBtZXNzYWdlcyA9IHtcclxuXHRib2R5TWVzc2FnZTogbWVzc2FnZSgnQ2hlY2sgdGhlIENvbnNvbGUhJyksXHJcblx0Y29uc29sZU1lc3NhZ2U6IG1lc3NhZ2UoJ0FwcCBXb3JrcyEnKVxyXG59XHJcblxyXG5jb25zb2xlLmluZm8obWVzc2FnZXMuY29uc29sZU1lc3NhZ2UpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xyXG5cdGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDxoMT4ke21lc3NhZ2VzLmJvZHlNZXNzYWdlfTwvaDE+YDtcclxufSk7IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IDU7IiwiZXhwb3J0IGZ1bmN0aW9uIG1lc3NhZ2UoeCkge1xyXG4gICAgcmV0dXJuIHg7XHJcbn0iXX0=
