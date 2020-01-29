
class Jedi{
    nombre:string = 'Obi Wan Kenobi';
    edad:number;
    colorSableLuz:string;
    especie:string;

    constructor (nombre:string, edad:number, colorSableLuz:string, 
                    especie:string){
        this.nombre = nombre;
        this.edad = edad;
        this.colorSableLuz = colorSableLuz;
        this.especie = especie;
    }
}

const ObiWanKenobi: Jedi = new Jedi('', 0, '', '');
console.log(ObiWanKenobi);

//A class interacting with an interface
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let student = new Student("Jane", "M.", "User");

let result: string = greeter(student);
console.log(result);