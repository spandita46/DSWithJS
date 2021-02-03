const charCountWithRE = (str) => {
  let result = {};

  for (let char of str) {
    char = char.toUpperCase();
    if (/[A-Z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
};

const charCountWithAscii = (str) => {
  let result = {};

  for (let char of str) {
    if (isAlphaNumericChar(char)) {
      char = char.toUpperCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
};

const isAlphaNumericChar = (char) => {
  let asciiCode = char.charCodeAt(0);
  // (0-9) || (a-z) || (A-Z)
  return (
    (asciiCode > 47 && asciiCode < 58) ||
    (asciiCode > 64 && asciiCode < 91) ||
    (asciiCode > 96 && asciiCode < 123)
  );
};

console.log(charCountWithRE('Sandeep is a good boy!')); // O(n)
console.log(charCountWithAscii('Sandeep is a good boy!')); // O(n)
