interface Human {
  firstName: string;
  lastName: string;
  age: number;
}

interface Mutant {
  firstName: string;
  lastName: string;
  age: number;
  hability: string;
}

class Hybrid {
  allAbout: string;

  constructor(public firstName: string, public lastName: string, public age: number, public hability: string) {
    this.allAbout = `Name: ${firstName} ${lastName} \n Age: ${age} |n Hability: ${hability}`;
  }
}

type human = Human | Mutant; //This just keeps the properties of the interface that match in both interfaces
type mutant = Human & Mutant; //This keeps all the properties from both interfaces

function humanFeatures(person: human) {
  return `Hello, ${person.firstName} ${person.lastName} with age: ${person.age}`;
}

function mutantFeatures(person: mutant) {
  return `Hello, ${person.firstName} ${person.lastName} with age: ${person.age} and the power ${person.hability}`;
}

let hybrid = new Hybrid('Jane', 'M.', 28, 'Super strength');

let greeting: string = mutantFeatures(hybrid);
console.log(greeting);
