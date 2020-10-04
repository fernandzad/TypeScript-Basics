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


/**
 * If we want to preserve for example in the props from
 * a component we can make something like this
 */

interface Table {
  rows: number;
  colums: number;
}

type ComponentProps = {
  option: string 
} & ( { hasButton: boolean } | { table: Table } );

// 
/**
 * UNION AND INTERSECTION OF TYPES
 * The explanation is, the component has to have
 * option and (hasbutton or table) types assigned
 */
const Component: ComponentProps = {
  option: 'This is a table!',
  table: {
    rows: 34,
    colums: 12
  }
}; 

const Component2: ComponentProps = {
  option: 'This is a table!',
  hasButton: true
};


/**
 * DISCRIMINANT UNIONS
 * 
 */
interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}
function drawCircle(shape: Circle) {}
function drawRectangle(shape: Rectangle) {}
function drawSquare(shape: Square) {}

type Shape = Square | Rectangle | Circle;

function drawShape(shape: Shape) {
  if (shape.kind === 'circle') {
    drawCircle(shape);
  } else if (shape.kind === 'rectangle') {
    drawRectangle(shape);
  } else {
    drawSquare(shape);
  }
}

/**
 * DISCRIMINATION UNIONS
 * The main idea of TypeScript is create invalid states for types impossible
 * lets see an example bellow
 */

interface User { }
type RequestState = {
  loading: true,
  data: undefined,
  error: undefined
} | {
  loading: false,
  data: User,
  error: undefined,
} | {
  loading: false,
  data: undefined,
  error: Error
};

function processData(data: User) { }

function processRequest2(request: RequestState) {
  if (request.loading) {
    console.log('loading...');
    return;
  }

  if (request.error) {
    console.log('ops...');
    return;
  }
  
  // Put the mouse over request please :)
  processData(request); // This way we won't need to worry about if our request is valid
  // BECAUSE THE TYPES COULD HAS
}

const req: RequestState = {
  loading: false,
  data: {},
  error: undefined
}
const req2: RequestState = {
  loading: true,
  data: undefined,
  error: undefined
}
const req3: RequestState = {
  loading: false,
  data: undefined,
  error: Error('some error')
}
processRequest2(req);
