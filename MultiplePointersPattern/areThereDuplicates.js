// Write a function named areThereDuplicates which accepts a variable
// number of the arguments, and checks whether there are any duplicates
// among the arguments passed in.

const areThereDuplicates = (...args) => {
  if (args.length === 0) {
    return false;
  }

  let sortedArgs = args.sort();

  for (let i = 0; i < sortedArgs.length; i++) {
    if (sortedArgs[i] === sortedArgs[i + 1]) {
      return true;
    }
  }
  return false;
};

// Test Cases
console.log(areThereDuplicates('a', 'c', 'e', 'f', 'a', 'n')); // true
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates(1, 10, 2, 3)); // false
