// Hoisting with variables

// Variables defined with const and let keyword are not hoisted
// Example:

console.log(x); // Will throw error --> x is not defined
const x = 5;

console.log(x); // Will throw error --> x is not defined
let x = 5;

console.log(x); // NO error --> will log "undefined"
var x = 5;

// Variables declared with var keyword are initialised to undefined, if it's found to be used before it's declared,
// and hence it doesn't thoew "not defined" error message.
// It's same as the following

let x = undefined;
console.log(x);

// IMPORTANT: Note that this logic isn't true for function expressions and therefore "not defined" will throw error.