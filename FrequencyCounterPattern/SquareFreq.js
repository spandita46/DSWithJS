// Write a function called same, which accepts two arrays. The fucntion should return true if every value in the array has
// it's corresponding value squared in the second array. The frequency of values must be the same.

// Examples
// 1> [1, 2, 3], [ 4, 1, 9] // true
// 2> [3, 4, 5, 6], [9, 25, 36, 16, 9, 25] // false - frequency mismatch
// 3> [3, 4], [9] // false
// 4? [1, 2, 1], [4, 4, 1] // false - frequency mismatch

const arrayNum = [5, 2, 2, 3, 1];
const arraySquare = [4, 1, 9, 4, 25];

//O(n)
const areSameMySol = (nums, squares) => {
  if (nums.length !== squares.length) return false;

  let areArrSame = true;
  let numFreqObj = {};
  let squaresFreqObj = {};

  for (let sqNum of squares) {
    squaresFreqObj[sqNum] = ++squaresFreqObj[sqNum] || 1;
  }

  for (let num of nums) {
    numFreqObj[num] = ++numFreqObj[num] || 1;
  }

  for (let num of nums) {
    areArrSame = areArrSame && numFreqObj[num] === squaresFreqObj[num * num];
    if (!areArrSame) {
      break;
    }
  }
  return areArrSame;
};

// O(n^2)
const areSameCourseFirst = (nums, squares) => {
  if (nums.length !== squares.length) return false;

  for (let i = 0; i < nums.length; i++) {
    let sqIndex = squares.indexOf(nums[i] ** 2); // nums[i] ** 2 ~ nums[i] * nums[i]
    if (sqIndex === -1) return false;
    squares.splice(sqIndex, 1); //find corresponding square value & remove
  }

  return true;
};

console.log('My Solution - ', areSameMySol(arrayNum, arraySquare)); // 3 * O(n) ~ O(n)
console.log(
  'Course Solution First - ',
  areSameCourseFirst(arrayNum, arraySquare)
); // O(n^2)
