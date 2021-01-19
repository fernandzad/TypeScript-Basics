"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
//Destructuring arrays
var array = [1, 2, 3];
var first = array[0], rest = array.slice(1);
console.log(first);
rest.forEach(function (e) {
    console.log(e);
});
//Destructuring tuples
var tuple = [7, 'hello', true];
var one = tuple[0], two = tuple[1], three = tuple[2];
console.log(one);
console.table(tuple);
var obj = {
    a: 'string',
    b: 5,
    c: true,
};
var a = obj.a, nothingmore = __rest(obj, ["a"]);
console.log(a);
console.log(nothingmore);
