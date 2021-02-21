// Write a function named areThereDuplicates which accepts a variable
// number of the arguments, and checks whether there are any duplicates
// among the arguments passed in.

const areThereDuplicates = (...args) => {
  let counter = {};
  for (let item of args) {
    if (counter[item] !== undefined) {
      return true;
    } else {
      counter[item] = 1;
    }
  }
  return false;
};

// Test Cases
console.log(areThereDuplicates('a', 'c', 'e', 'f', 'a', 'n')); // true
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates(1, 10, 2, 3)); // false
