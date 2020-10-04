"use strict";
/**
 * WITHOUT TYPE LITERAL POWER
 * @param variant
 */
function renderButton(variant) {
    return 'something';
}
renderButton('primary');
renderButton('secondary');
renderButton('warning');
// What would happend if we make a typo?
renderButton('primry'); //Type literals allows us to protect the code
/**
 * WITH THE POWER OF TYPE LITERAL
 * @param variant
 */
function renderButtonBoosted(variant) {
    return 'something';
}
// ERROR: renderButtonBoosted('primry'); // TypeScript save us from errors like this
renderButtonBoosted('secondary');
renderButtonBoosted('warning');
var response = function (code) {
    if (code === 200)
        return 'OK';
    else
        return 'NOT FOUND';
};
console.log(response(200));
console.log(response(404));
// ERROR: console.log(response(400));
/**
 * We can combine types literals and supersets
 * e.g.
 */
var letterOrNumber;
