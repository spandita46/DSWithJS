const { performance } = require('perf_hooks');
// Set up
function sumNumbersLoop(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  console.log(total);
}

function sumNumbersFormula(num) {
  let total = (num * (num + 1)) / 2;
  console.log(total);
}

// Execution
let num = 100;
let t1 = performance.now();
sumNumbersLoop(num); // O(n)
let t2 = performance.now();

console.log('Loop Execution Took ', t2 - t1, 'micro seconds.');

let t3 = performance.now();
sumNumbersFormula(num); // O(1)
let t4 = performance.now();

console.log('Formula Execution Took ', t4 - t3, 'micro seconds.');
