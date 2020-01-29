console.log('Esto es TypeScript!');
//bool en TypeScript
var esTypeScript = true;
var esJavascript = false;
//number en TypeScript
var avengers = 5;
var villanos;
var otros = 2; //Not Recommended
console.log(villanos = 5);
//strings in TypeScript
var refresco = 'Coca-Cola';
var soda = "Pepsi";
var jugo = "Del Valle"; //Not recommended
console.log(refresco + " " + soda + " " + jugo);
//Tipo any
var valor;
valor = 'Harry Potter';
console.log(valor.substring(0, 5));
valor = 5;
console.log(valor.toExponential(7));
valor = true;
console.log(valor);
//Arreglos en TypeScript
var arreglo = [1, 2, 3, 4, 5, 6, 7];
var cadenas = ['cadena1', 'cadena2', 'cadena3', '4', '5', '6', '7'];
arreglo.map(function (num) {
    console.log(num);
});
cadenas.map(function (cadena) {
    console.log(cadena);
});
