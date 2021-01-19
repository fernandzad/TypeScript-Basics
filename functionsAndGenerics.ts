
type MultiplyNumbers = (x: number, y: number) => number;

const multiply: MultiplyNumbers = (x, y) => x * y;
function applyMultiplication(multiplyFn: MultiplyNumbers) {

}


/**
 * 
 * GENERICS
 * Let us work with functions, objects that we want to accept various types
 * without any or naming explicitly that types
 * Actually is like if we explicitly put all the existing types
 * like number, boolean, string, array 
 * WITHOUT LOSING INFERING FEATURE
 */

function getData(id: number) {
  const data = { /** ... */};
  return data;
}

let data1 = getData(1);
let data2 = getData(2);


function addGenerics<T>(something1: T, something2: T) {
  return [something1, something2];
}

addGenerics(3, 4);
addGenerics('th', 'is');