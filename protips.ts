/**
 * const vs let
 * When you use let it will take the type of the object for example:
 */
let number = 5;
// Here the type is number
// But when you use const it will take the type literal of the object
const otherNumber = 10;

/**
 * Tuple infering
 * How to make TypeScript infer a tuple of so many elements
 * Notice that when you put the mouse over the name of the variable
 * It will tell you that is a readonly variable
 */
let tupleInfering = [91, 24, 37, 24, 15] as const;
// If we try to use an array method like
// ERROR: tupleInfering.push(1);
// It'll throw us an error
