let arr = [17, 42, 8, 99];
console.log("Aefore:", arr);

let sorted = Array.from(arr).sort((a, b) => {
  return a - b;
});
console.log("After:", sorted);
