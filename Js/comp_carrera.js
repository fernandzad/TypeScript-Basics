'use strict';
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('sin IIFE ' + i);
  }, 100 * i);
}
//IIFE - an Immediately Invoked Function Expression - to capture i at each iteration
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log('con IIFE ' + i);
    }, 100 * i);
  })(i);
}
