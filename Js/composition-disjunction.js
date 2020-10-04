"use strict";
var Hybrid = /** @class */ (function () {
    function Hybrid(firstName, lastName, age, hability) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.hability = hability;
        this.allAbout = "Name: " + firstName + " " + lastName + " \n Age: " + age + " |n Hability: " + hability;
    }
    return Hybrid;
}());
function humanFeatures(person) {
    return "Hello, " + person.firstName + " " + person.lastName + " with age: " + person.age;
}
function mutantFeatures(person) {
    return "Hello, " + person.firstName + " " + person.lastName + " with age: " + person.age + " and the power " + person.hability;
}
var hybrid = new Hybrid('Jane', 'M.', 28, 'Super strength');
var greeting = mutantFeatures(hybrid);
console.log(greeting);
