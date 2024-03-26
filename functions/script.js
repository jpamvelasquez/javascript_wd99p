"use strict";

let min = parseInt(prompt("Minimum number"));
let max = parseInt(prompt("Maximum number"));

function evenNum(min, max) {
  if (min > max) {
    return;
  }

  if (min % 2 !== 0) {
    min++;
  }
  console.log(min);
  evenNum(min + 2, max);
}

if (isNaN(min) || isNaN(max)) {
  console.log("Invalid input!");
} else {
  evenNum(min, max);
}

// function mySelf(mins, maxs) {
//   if (mins > maxs) {
//     return;
//   }
//   if (mins %2 ==0){
//     console.log(min)
//   }
//   min++;
//   mySelf(mins,maxs)
// }
//Coach Code
