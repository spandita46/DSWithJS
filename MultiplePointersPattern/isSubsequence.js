// Write a function called isSubsequence which takes two strings as
// arguments and checks whether the the characters in the first string
// appear somewhere in the second sting withpout their order being change.

//O(n^2)
const isSubsequenceMS = (str1, str2) => {
  if (str1.length > str2.length) return false;

  let nextIndex = 0;

  for (let char of str1) {
    let doesCharExistInStr2 = false;

    for (let j = nextIndex; j < str2.length; j++) {
      let charAtJ = str2[j];

      if (char === charAtJ && nextIndex <= j) {
        nextIndex = j + 1;
        doesCharExistInStr2 = true;
        break;
      }
    }

    if (!doesCharExistInStr2) {
      return false;
    }
  }
  return true;
};

//O(n)
const isSubsequence = (str1, str2) => {
  if (!str1) return true;
  if (str1.length > str2.length) return false;

  let str1Index = 0;
  let str2Index = 0;

  while (str2Index < str2.length) {
    if (str1[str1Index] === str2[str2Index]) {
      str1Index++;
    }
    // all str1 chars matched
    if (str1Index === str1.length) return true;

    str2Index++;
  }
  return false;
};

// Test Cases
console.log(isSubsequence('sing', 'sting')); //true;
console.log(isSubsequence('hello', 'world hello')); //true;
console.log(isSubsequence('abc', 'abracadabra')); //true;
console.log(isSubsequence('abc', 'acb')); //false -> inccorect order;
console.log(isSubsequence('abcd', 'abc')); //false -> inccorect order;
