interface Person {
  id: string;
  name: string;
  age: number;
  email?: string;// Notice that the type is 'string | undefined' when we make it optinal
}

const adri: Person = {
  id: '1170',
  name: 'Adrian',
  age: 26,
  email: 'adrian@example.com'
}

function logDomain(email: string) { }

function logOptionalEmail(email?: string) { }

function logPerson(person: Person) {
  // This is gonna complaint because it's an optional parameter of the type
  // ERROR: logDomain(person.email); 

  // To solve this error we had to make the email parameter optional on the function
  logOptionalEmail(person.email);
}

/**
 * If you want to overwrite an existing type from JS like window
 * for example, we can use interfaces as this:
 */
// ERROR: window.videoPlayerJs
// If we try to use it here, it will starting to complaint
interface Window {
  videoPlayerJs: number[];
}
window.videoPlayerJs
// NOW it doesn't