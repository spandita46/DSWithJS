let names = ['Sandeep', 'Swati', 'Sharika'];
let familyNames = ['Pandita', 'Raina', 'Koul'];

console.log(names[0]); // o(1);
console.log(names[2]); // o(1);

// Push
names.push('Ajay'); // o(1)
names.push('Varsha'); // o(1)
console.log(names);

// Pop
names.pop(); // o(1)
console.log(names);

// Shift - Remove
names.shift(); // O(n)
console.log(names);

// Unshift - Add
names.unshift('Sandeep'); // O(n)
names.unshift('Roshan Lal'); // O(n)
console.log(names);

// Concatenate : O(n)+O(m) ~ O(n)
console.log(names.concat(familyNames));
console.log(names); // Doesn't Mutate Original Array
console.log(familyNames);

// Slice
let namesCopy = names.slice(1, 4); //O(n)
console.log(namesCopy);
console.log(names); // Doesn't Mutate Original Array

// Splice
let namesCopySplice = names.splice(1, 3); //O(n)
console.log(namesCopySplice);
console.log(names); // Mutates Original Array

// Sort
names = names.concat(namesCopySplice).concat(familyNames);
names.sort(); // Mutates Original Array - O(n * log n)
console.log(names);

// map - O(n)
names.map((name) => console.log('Hello', name));
