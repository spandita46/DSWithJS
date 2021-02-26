// Write a function called findLongestSubString, which accepts a string and
// returns the length of longest substring with all distinct characters

const findLongestSubString = (str) => {
  if (!str) return 0;

  let start = 0;
  let end = 0;
  let maxLen = 0;
  let lastIndexes = {};

  while (end < str.length) {
    let char = str[end];
    //  console.log('Char =>', char);
    // characterr already exists
    if (lastIndexes[char] !== undefined) {
      start = Math.max(start, lastIndexes[char] + 1);
    }
    maxLen = Math.max(maxLen, end - start + 1);
    lastIndexes[char] = end;

    end++;
  }
  //console.log(lastIndexes);
  return maxLen;
};

// Test Cases
console.log(findLongestSubString('')); //0
console.log(findLongestSubString('rithmschool')); //7
console.log(findLongestSubString('thisisawesome')); //6
console.log(findLongestSubString('thecatinthehat')); //7
console.log(findLongestSubString('bbbbb')); //1
console.log(findLongestSubString('thisisshowwedoit')); //6
