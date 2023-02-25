// The idea behind a module is that it's file of reusable
// We can import sections of pre-written code to use whenever
// Great for any general utility values and functions
// Helps to make your code more reusable and maintanalble
// Think of modules as seperate chapter of a book


import { PI, getCircumference, getArea } from "./math";

alert(PI);

let circumference = getCircumference(10);
console.log(circumference);

let area = getArea(5);
console.log(area);