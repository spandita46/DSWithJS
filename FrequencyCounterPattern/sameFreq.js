// Write a function called sameFrequency, which accepts two
// positive integers. Find out if the two numbers have the same frequency
// of digits

const sameFrequency = (num1, num2) => {
  let num1Str = num1.toString();
  let num2Str = num2.toString();

  if (num1Str.length !== num2Str.length) {
    return false;
  }

  let counter = {};

  for (let char of num1Str) {
    if (counter[char] !== undefined) {
      counter[char] = counter[char] + 1;
    } else {
      counter[char] = 1;
    }
  }

  for (let char of num2Str) {
    if (!counter[char]) {
      return false;
    } else {
      counter[char] = counter[char] - 1;
    }
  }

  return true;
};

// Test Cases
console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 2222)); //false
