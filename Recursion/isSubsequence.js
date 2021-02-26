// Write a function called isSubsequence which takes two strings as
// arguments and checks whether the the characters in the first string
// appear somewhere in the second sting withpout their order being change.

const isSubsequence = (str1, str2) => {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  if (str1[0] === str2[0]) {
    return isSubsequence(str1.slice(1), str2);
  }
  return isSubsequence(str1, str2.slice(1));
};

// Test Cases
console.log(isSubsequence('sing', 'sting')); //true;
console.log(isSubsequence('hello', 'world hello')); //true;
console.log(isSubsequence('abc', 'abracadabra')); //true;
console.log(isSubsequence('abc', 'acb')); //false -> inccorect order;
console.log(isSubsequence('abcd', 'abc')); //false -> inccorect order;
