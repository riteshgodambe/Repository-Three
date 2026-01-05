// Declare variables
let name = "Alex"; // String
const age = 30;   // Number
let isStudent = true; // Boolean

// Use template literals for easy string formatting
console.log(`Hi! I'm ${name} and I'm ${age} years old.`);
// Output in console: Hi! I'm Alex and I'm 30 years old.

// Function declaration for adding two numbers
function sum(a, b) {
  return a + b;
}

// Function call and storing the result
let result = sum(5, 3);
console.log(result); // Output: 8

// Arrow function (modern syntax for anonymous functions)
const multiply = (a, b) => a * b;
console.log(multiply(4, 2)); // Output: 8

let hour = 14;
let greeting;

if (hour < 10) {
  greeting = "Good morning";
} else if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting); // Output: Good day

const cars = ["BMW", "Volvo", "Saab", "Ford"];

console.log("List of cars:");
for (const car of cars) {
  console.log(car);
}
// Output:
// BMW
// Volvo
// Saab
// Ford

