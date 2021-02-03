let instructor = {
  firstName: 'Sandeep',
  isInstructor: true,
  favouriteNumbers: [1, 2, 3, 4],
};

console.log(Object.keys(instructor)); //O(n)
console.log(Object.values(instructor)); //O(n)
console.log(Object.entries(instructor)); //O(n)
console.log(instructor.hasOwnProperty('firstName')); // O(1)
