// Given two strings, write a function to determineif the second string is an
// anagram of the first. An anagram is a word, a phrase, or name formed by
// rearranging the letters of another, such as cinema, formed from iceman

// Solutions
// O(n)
const validAnagramMySol = (first, second) => {
  if (first.length !== second.length) return false;
  let counterFirst = {};
  let counterSecond = {};
  let isValid = true;

  for (let char of first.toLowerCase()) {
    counterFirst[char] = ++counterFirst[char] || 1;
  }

  for (let char of second.toLowerCase()) {
    counterSecond[char] = ++counterSecond[char] || 1;
  }

  for (let char of first.toLowerCase()) {
    isValid = isValid && counterFirst[char] === counterSecond[char];
  }

  return isValid;
};

// O(n)
const validAnagram = (first, second) => {
  if (first.length !== second.length) return false;
  let lookup = {};

  for (let char of first.toLowerCase()) {
    lookup[char] = ++lookup[char] || 1;
  }

  for (let char of second.toLowerCase()) {
    if (!lookup[char]) {
      return false;
    }
    lookup[char] = lookup[char] - 1;
  }
  return true;
};

// Tests
console.log('My Solution');
console.log(validAnagramMySol('', '')); //true;
console.log(validAnagramMySol('textwisetime', 'timewisetext')); // true
console.log(validAnagramMySol('aaz', 'zza')); // false
console.log(validAnagramMySol('awesome', 'awesom')); // false

// Tests
console.log('Course Solution');
console.log(validAnagram('', '')); //true;
console.log(validAnagram('textwisetime', 'timewisetext')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('awesome', 'awesom')); // false
