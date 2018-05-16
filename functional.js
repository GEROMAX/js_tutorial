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

console.log(imperativeMap(states));
console.log(functionalMap(states));

console.log(functionalMap(states).map(val => "https://example.com/".concat(val)));
