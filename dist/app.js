"use strict";
let x = [51.54, 185, 30.9, 92.17, 15];
let int = x.filter((value) => Number.isInteger(value));
let sum = int.reduce((total, item) => total + item);
console.log(sum);
