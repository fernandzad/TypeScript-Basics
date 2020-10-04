//Destructuring arrays
let array: number[] = [1, 2, 3];
let [first, ...rest] = array;

console.log(first);
rest.forEach((e) => {
  console.log(e);
});

//Destructuring tuples
let tuple: [number, string, boolean] = [7, 'hello', true];

let [one, two, three] = tuple;
console.log(one);
console.table(tuple);

//Destructuring objects
interface Obj {
  a: string;
  b: number;
  c: boolean;
}
let obj: Obj = {
  a: 'string',
  b: 5,
  c: true,
};
let { a, ...nothingmore } = obj;
console.log(a);
console.log(nothingmore);
