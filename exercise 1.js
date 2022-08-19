//Create a variable that holds a string value
const person = "Carlos";
// Create a variable that holds a number value
const pi = 3.14;
// Create a variable that holds a boolean value
const x = 2;
Boolean(x); // true
// Create a variable that holds a null value
const y = null;
Boolean(y); // false
// Create a variable that holds an undefined value
const z = undefined;
Boolean(z); // false
// Create a variable that points to an object instance
const car = {
    type:"BMW", 
    model:"X5", 
    color:"red"
};
// Create a variable that points to an array instance
const cars = [
    "RAM", 
    "GMC", 
    "BMW"
];
// Create a variable that has no default value declaration
const d = 300 * "Hola";
Boolean(d);