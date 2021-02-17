// Write a function called maxSubArraySum which accepts an array of
// integers and a number called n. The function should calculate the
// maximum sum of n consecutiove elements in the array.

console.log('My Solution');
//O(n^2)
const maxSubArraySum_MS = (numArr, num) => {
  if (num > numArr.length) return null;
  let start = 0;
  let end = num;
  let greatestSum = 0;

  while (end <= numArr.length) {
    let rangeSum = 0;
    for (let i = start; i < end; i++) {
      rangeSum += numArr[i];
    }

    if (rangeSum > greatestSum) {
      greatestSum = rangeSum;
    }

    start++;
    end++;
  }
  return greatestSum;
};

// Test Cases
console.log(maxSubArraySum_MS([1, 1, 1, 1, 2], 2)); //3
console.log(maxSubArraySum_MS([9, 8, 1, 3, 7, 16, 2], 3)); //26
console.log(maxSubArraySum_MS([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubArraySum_MS([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubArraySum_MS([], 4)); //null

console.log('Course Solution');
// Test Cases
const maxSubArraySum = (numArr, num) => {
  let greatestSum = 0;
  let tempRangeSum = 0;
  if (num > numArr.length) return null;

  // Calculate sum of first range starting from 0
  for (let i = 0; i < num; i++) {
    greatestSum += numArr[i];
  }

  // assign greatest sum to temp variable
  tempRangeSum = greatestSum;

  // We are keeping track of temporary range sum
  // Moving window/range by just one and avoiding
  // recalculation of all the range elements
  for (let j = num; j < numArr.length; j++) {
    let startingElOfRange = numArr[j - num];
    let nextElGoingToBeInRange = numArr[j];
    tempRangeSum = tempRangeSum - startingElOfRange + nextElGoingToBeInRange;
    greatestSum = Math.max(tempRangeSum, greatestSum);
  }

  return greatestSum;
};
console.log(maxSubArraySum([1, 1, 1, 1, 2], 2)); //3
console.log(maxSubArraySum([9, 8, 1, 3, 7, 16, 2], 3)); //26
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubArraySum([], 4)); //null
