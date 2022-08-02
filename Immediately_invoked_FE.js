// Immediately-Invoked Function Expressions (read as IIFY)
// IIFEs are functions that are executed immediately after being defined.


//  Example:

// Normal function:
function add(a, b){
    console.log(a + b);
}

add(3, 6); // 9


// IIFE version
(function add(a, b){
    console.log(a + b);
})(3, 8); // 11


// works with arrow function as well
const add = ((a, b) => {
    console.log(a + b);
})(2, 6); // 8


// Note:
// IIFEs were used to limit the scope of variables since initially only
// var keyword was available, which scopes all variables globally.

// Since the release of ES6, 'let' keyword is preferred over 'var', which block-scopes
// the variables and therefore IIFEs are't commonly used anymore 