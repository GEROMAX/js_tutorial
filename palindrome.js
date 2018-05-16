const palindrome = str => {
  let casingStr = str.toLowerCase();
  return casingStr === reverseString(casingStr);
};

const reverseString = str => {
  return Array.from(str).reverse().join("");
};
