console.log('Esto es TypeScript!');
//bool en TypeScript
var esTypeScript = true;
var esJavascript = false;
console.log('*Boolean type test*\n');
console.log(esTypeScript);
//number en TypeScript
var avengers = 5;
var villanos;
var otros = 2; //Not Recommended
console.log('*Number type test*\n');
console.log(villanos = 5);
//strings in TypeScript
var refresco = 'Coca-Cola';
var soda = "Pepsi";
var jugo = "Del Valle"; //Not recommended
console.log('*String type test*\n');
console.log(refresco + " " + soda + " " + jugo);
//Tipo any
var valor;
valor = 'Harry Potter';
console.log('*Any type test*\n');
console.log(valor.substring(0, 5));
valor = 5;
console.log(valor.toExponential(7));
valor = true;
console.log(valor);
//Arreglos en TypeScript
var arreglo = [];
var cadenas = ['cadena1', 'cadena2', 'cadena3', '4', '5', '6', '7'];
var genericArray = [1, 2, 3, 5, 7, 11];
arreglo = genericArray.map(function (num) {
    return num * 2;
});
console.log('*Array type test*\n');
arreglo.forEach(function (number) {
    console.log(number);
});
//Tuples in TypeScript
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log('*Tuple type test*\n');
console.log(x[0].substring(0, 3));
console.log(x[1].toFixed());
//Enums in TypeScript
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var redValue = Color.Red;
var blueValue = Color.Blue;
console.log('*Enum type test*\n');
console.log(redValue);
//console.log(blueValue);
var Colortest;
(function (Colortest) {
    Colortest[Colortest["Red"] = 1] = "Red";
    Colortest[Colortest["Green"] = 2] = "Green";
    Colortest[Colortest["Blue"] = 3] = "Blue";
})(Colortest || (Colortest = {}));
var colorName = Colortest[2];
console.log(colorName);
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { 
//         console.log(i); 
//     }, 100 * i);
// }
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
