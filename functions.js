// Hoisting with functions

// There are 2 ways to define functions in js...
// 1. Function Decleration = using "function" keyword => Hoisted
// 2. Function Expression = assigning function to a variable. => Not hoisted


// 1. Decleration 
console.log(addNums(1,2)); // Hoisted, therefore no error;
function addNums(a, b){
     return a + b;
}





// 2. Expression 

// Normal function assigned to a variable
console.log(addNums(5, 6)); // throw error => addNums is not defined
const addNums = function someName(a, b){
    return a + b;
}

// Function expression can also be anonymous like so
console.log(addNums(5, 6)); // throw error => addNums is not defined
const addNums = function (a, b){
    return a + b;
}

// Arrow function assigned to a variable
console.log(addNums(3, 5)); // throw error => addNums is not defined
const addNums = (a, b) => {
    return a + b;
}
