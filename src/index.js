import "./style.css";
import * as math from "./math";

document.write("Hello, world!!!");

const multiply = (a) => a * 8;

console.log("ES6 modules!");
console.log("sum = " + math.sum(2, 3));
console.log("multiply from index.js = " + multiply(5));
console.log("multiply from math = " + math.multiply(5));