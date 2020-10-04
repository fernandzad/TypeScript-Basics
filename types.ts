console.log('Esto es TypeScript!');

//bool en TypeScript
let esTypeScript: boolean = true;
let esJavascript: boolean = false;
console.log('*Boolean type test*\n');
console.log(esTypeScript);

//number en TypeScript
let avengers: number = 5;
let villanos: number;
let otros = 2;

console.log('*Number type test*\n');
console.log((villanos = 5));

//strings in TypeScript
let refresco: string = 'Coca-Cola';
let soda: string = 'Pepsi';
let jugo = `Del Valle`;

console.log('*String type test*\n');
console.log(`${refresco} ${soda} ${jugo}`);

//Tipo any
let valor;
valor = 'Harry Potter';
console.log('*Any type test*\n');
console.log(valor.substring(0, 5));

valor = 5;
console.log(valor.toExponential(7));

valor = true;
console.log(valor);

//Arreglos en TypeScript
let arreglo: number[] = [];
let cadenas: string[] = ['cadena1', 'cadena2', 'cadena3', '4', '5', '6', '7'];

let genericArray: number[] = [1, 2, 3, 5, 7, 11];

arreglo = genericArray.map((num) => {
  return num * 2;
});
console.log('*Array type test*\n');
arreglo.forEach((number) => {
  console.log(number);
});

//Tuples in TypeScript
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log('*Tuple type test*\n');
console.log(x[0].substring(0, 3));
console.log(x[1].toFixed());

//Enums in TypeScript
enum Color {
  Red,
  Green,
  Blue,
}
let redValue: Color = Color.Red;
let blueValue: Color = Color.Blue;
console.log('*Enum type test*\n');
console.log(redValue);
//console.log(blueValue);
enum Colortest {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Colortest[2];
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
