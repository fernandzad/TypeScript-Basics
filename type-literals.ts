/**
 * WITHOUT TYPE LITERAL POWER
 * @param variant 
 */
function renderButton(variant: string) {
  return variant;
}
let variant = renderButton('primary');
renderButton('secondary');
renderButton('warning');
// What would happend if we make a typo?
renderButton('primry'); //Type literals allows us to protect the code


type button = 'primary' | 'secondary' | 'warning';
/**
 * WITH THE POWER OF TYPE LITERAL
 * @param variant 
 */
function renderButtonBoosted(variant: button) {
  return 'something';
}
// ERROR: renderButtonBoosted('primry'); // TypeScript save us from errors like this
renderButtonBoosted('secondary');
renderButtonBoosted('warning');


/**
 * Another useful use case is
 * put mouse over the name of the function
 * it is infering the returning type!!!
 */
type statusCodeOptions = 200 | 404 | 500;
type statusCodeReturn = 'OK' | 'NOT FOUND' | 'INTERNAL SERVER ERROR';
const processRequest = (code: statusCodeOptions): statusCodeReturn => {
    if (code === 200) return 'OK';
    else if (code === 500) return 'INTERNAL SERVER ERROR';
    // else return 'NOT FOUNd'; // Specifying the returning type allows us to save of our code from typos
    else return 'NOT FOUND';
}

let response = processRequest(200);
console.log(processRequest(404));
// ERROR: console.log(response(400));


/**
 * We can combine types literals and supersets 
 * e.g.
 */
let letterOrNumber: 'a' | 'b' | number;