// map、filter、reduceのサンプル

const states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

const imperativeMap = source => {
  let forUrl = [];
  source.forEach(val => {
    forUrl.push(val.toLowerCase().split(/\s/).join("-")
    );
  });
  return forUrl;
};

const functionalMap = function(source) {
  return source.map(val => urlify(val));
};

const urlify = function(target){
  return target.toLowerCase().split(/\s/).join("-");
};

function imperativeFilter(states) {
  let singleWordStates = [];
  states.forEach(function(state) {
    if (state.split(/\s+/).length === 1) {
      singleWordStates.push(state);
    }
  });
  return singleWordStates;
}

const selectSingleWords = source => {
  return source.filter(val => !val.match(/\s+/));
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const iterativeSum = arr => {
  let total = 0;
  arr.forEach(val => {
    total += val;
  });
  return total;
};

const sumByReduce = arr => {
  return arr.reduce((sum, n) => {
    return (sum += n);
  }, 0 /*summary box default value*/);
};

const imperativeLengths = source => {
  let lengths = {};
  states.forEach(function(state) {
    lengths[state] = state.length;
  });
  return lengths;
};

const analyzeWordsLength = source => {
  return source.reduce((hs, val) => {
    hs[val] = val.length;
    return hs;
  }, {});
};

console.log(imperativeMap(states));
console.log(functionalMap(states));
console.log(functionalMap(states).map(val => "https://example.com/".concat(val)));

console.log(imperativeFilter(states));
console.log(selectSingleWords(states));

console.log(iterativeSum(array));
console.log(sumByReduce(array));

console.log(imperativeLengths(states));
console.log(analyzeWordsLength(states));
