// Write a function called minSubArrayLen which accepts an array of
// positive integers and a positive number called n. The function
// should return the minimum length of contagious sub array of which
// the sum is greater than or equal to the integer passed to the function (n).
// Return 0, if such sub array does not exist

const minSubArrayLen = (numArr, num) => {
  if (!numArr.length) return 0;

  let greatestAt = 0;

  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] > numArr[greatestAt]) {
      greatestAt = i;
    }
    if (numArr[greatestAt] >= num) return 1;
  }

  let sum = numArr[greatestAt];
  let start = greatestAt - 1;
  let end = greatestAt + 1;
  while (sum < num) {
    if (start < 0 && end >= numArr.length) break;

    if (start >= 0 && end < numArr.length) {
      if (numArr[start] >= numArr[end]) {
        sum += numArr[start];
        start--;
      } else {
        sum += numArr[end];
        end++;
      }
    } else if (start >= 0) {
      sum += numArr[start];
      start--;
    } else if (end < numArr.length) {
      sum += numArr[end];
      end++;
    }
  }

  return sum < num ? 0 : end - start - 1;
};

// Test Cases
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 => because [4,3] will be smallest array where sum is 7(>= 7)
console.log(minSubArrayLen([3, 1, 7, 11, 14, 15, 9], 13)); // 1 => because [14] will be smallest array where sum is 14(>= 13)
console.log(minSubArrayLen([3, 1, 7], 13)); // 0 => because there is no smallest array where sum is >= 13
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); //3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); //5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); //2
