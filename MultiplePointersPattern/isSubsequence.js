// Write a function called isSubsequence which takes two strings as
// arguments and checks whether the the characters in the first string
// appear somewhere in the second sting withpout their order being change.

const isSubsequence = (str1, str2) => {
  if (str1.length > str2.length) return false;

  let orderFirst = {};
  let orderSecond = {};

  for (let i = 0; i < str1.length; i++) {
    orderFirst[i + 1] = str1[i];
  }
  console.log(orderFirst);
  return true;
};

// Test Cases
console.log(isSubsequence('sing', 'sting')); //true;
console.log(isSubsequence('hello', 'world hello')); //true;
console.log(isSubsequence('abc', 'abracadabra')); //true;
console.log(isSubsequence('abc', 'acb')); //false -> inccorect order;
console.log(isSubsequence('abcd', 'abc')); //false -> inccorect order;
