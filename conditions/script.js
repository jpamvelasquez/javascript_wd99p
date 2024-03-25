// let allowedAge = 18;
// let age = prompt("Please indicate your age");
// let gender = prompt("Enter your Gender").toLowerCase();

// // if (gender === "male") {
// //   if (age >= allowedAge) {
// //     console.log("Congratulations");
// //   } else {
// //     console.log("You are not allowed on this website");
// //   }
// // } else if (gender === "female") {
// //   if (age >= 15) {
// //     console.log("Congratulations");
// //   } else {
// //     console.log("You are not allowed on this website");
// //   }
// // } else {
// //   console.log("Apologies, this website in not LGBT friendly yet");
// // }

// //Shorthand
// if (gender === "male" && age >= allowedAge) {
//   console.log("Congratulations!");
// } else if (gender === "female" && age >= 15) {
//   console.log("Congratulations");
// } else {
//   console.log("Sorry you are not allowed on this website");
// }

// let grade = prompt("Enter your Grade");

// if (grade > 100) {
//   console.log("Invalid Grade");
// } else if (grade >= 90 && grade <= 100) {
//   console.log(`Your grade : ${grade} = 1`);
// } else if (grade >= 80 && grade <= 89.9) {
//   console.log(`Your grade : ${grade} = 2`);
// } else if (grade >= 70 && grade <= 79.9) {
//   console.log(`Your grade : ${grade} = 3`);
// }

let weight = prompt("Enter your weight");
let height = prompt("Enter your height");

let bmi = weight / height ** 2;

if (bmi >= 40) {
  console.log(`Your BMI is  ${bmi.toFixed(2)}Morbidly Obese`);
} else if (bmi >= 35 && bmi <= 39.9) {
  console.log(`Your BMI is ${bmi.toFixed(2)}. Result Severely Obese`);
} else if (bmi >= 30 && bmi <= 34.9) {
  console.log(`Your BMI is ${bmi.toFixed(2)}. Result Moderately Obese`);
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log(`Your BMI is ${bmi.toFixed(2)}. Result Overweight`);
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log(`Your BMI is ${bmi.toFixed(2)}. Result Normal Weight`);
} else if (bmi >= 16 && bmi <= 18.4) {
  console.log(`Your BMI is ${bmi.toFixed(2)}. Result Underweight`);
} else if (bmi <= 16) {
  console.log(`Your BMI is ${bmi.toFixed(2)}. Result Severly Underweight`);
} else {
  console.log("Invalid BMI");
}
