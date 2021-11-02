/*const in arrays */

const MY_ARRAY = [];
// It's possible to push items into the array
MY_ARRAY.push('A'); // ["A"]
// However, assigning a new array to the variable throws an error
// Uncaught TypeError: Assignment to constant variable.
MY_ARRAY = ['B'];