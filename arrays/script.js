"use strict";

let odd = [];
let even = [];

function collectNum() {
  let ask = prompt("Enter a number");
  if (ask === "0") {
    console.log(`Even Numbers : ${even}`);
    console.log(`Odd Numbers : ${odd}`);
    console.log(`*** End of Program ***`);
    return;
  }
  let num = parseFloat(ask);

  if (isNaN(num)) {
    console.log("Invalid Input");
  }
  if (num % 2 === 0) {
    even.push(num);
  }

  if (num % 2 !== 0) {
    odd.push(num);
  }
  collectNum();
}

collectNum();
