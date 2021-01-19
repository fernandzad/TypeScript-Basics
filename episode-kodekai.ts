// Arrays
const candies: string[] = ['tutsipop', 'pelon pelo rico', 'pulparindo'];
const chocolates: Array<string> = ['ferrero', 'carlos V', 'turin'];

let nums = [1, 2, 3, 4] as const;

//FUNCTION 1: DISCRIMINATION inside a function
// Conditional flow analysis
function substraction(something: boolean): number {
  if (something) {
    something;
    return 100;
  }
  else {
    something;
    return 99;
  }
}
let value = substraction(true);

