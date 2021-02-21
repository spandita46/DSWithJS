// write a function called averagePair that takes a sorted array of
// integer and a target average number. Determine if there are any pair
// in the sorted array where the average of pair will be equal to the
//  target average. There can be multiple such pairs.

const averagePair = (sortedArr, targetAvg) => {
  if (!sortedArr.length) return false;
  let start = 0;
  let next = sortedArr.length - 1;

  let avg = 0;

  while (start !== next) {
    avg = (sortedArr[start] + sortedArr[next]) / 2;

    if (avg === targetAvg) {
      return true;
    }

    if (avg > targetAvg) {
      next--;
    } else {
      start++;
    }
  }
  return false;
};

// Test Cases
console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([], 4)); //false
