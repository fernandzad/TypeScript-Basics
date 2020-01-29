console.log('Esto es TypeScript!');

//bool en TypeScript
let esTypeScript: boolean = true;
let esJavascript: boolean = false;

//number en TypeScript
let avengers: number = 5;
let villanos: number;
let otros = 2; //Not Recommended

console.log(villanos = 5);

//strings in TypeScript
let refresco: string = 'Coca-Cola';
let soda: string = "Pepsi";
let jugo = `Del Valle`; //Not recommended

console.log(`${refresco} ${soda} ${jugo}`);

//Tipo any
let valor;
valor = 'Harry Potter';
console.log( valor.substring(0, 5) );

valor = 5;
console.log( valor.toExponential(7) );

valor = true;
console.log( valor );

//Arreglos en TypeScript
let arreglo: number[] = [1,2,3,4,5,6,7];
let cadenas: string[] = ['cadena1','cadena2','cadena3','4','5','6','7'];
arreglo.map(num => {
    console.log(num);
});

cadenas.map(cadena => {
    console.log(cadena);
});
