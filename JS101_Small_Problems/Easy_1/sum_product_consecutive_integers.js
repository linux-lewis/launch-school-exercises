let rlSync = require('readline-sync');

let num = parseInt(rlSync.question("Please enter an integer greater than 0: "));
let sOrP = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

let ans;
let sumOrProduct;
for (i = 1; i <= num; i += 1) {
  if (sOrP === 's') {
    sumOrProduct = 'sum';
    if (i === 1) {
      ans = i;
    } else {
        ans = ans + i;
    }
  } else {
    sumOrProduct = 'product';
    if (i === 1) {
      ans = i;
    } else {
        ans = ans * i;
    }
  }
}

console.log(`The ${sumOrProduct} of the integers between 1 and ${num} is ${ans}.`);


// Solution computes the given inputs using functions

function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}
