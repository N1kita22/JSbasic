// Declaration func method
function minNum(first, second) {
  if (first < second) {
    return first;
  } else {
    return second;
  }
}
// Expression func method
const min = function (first, second) {
  if (first < second) {
    return first;
  } else {
    return second;
  }
};

// Arrow func method
const minArrow = (first, second) => {
  if (first < second) {
    return first;
  } else {
    return second;
  }
};
// Arrow short
const shtArrow = (first, second) => first + second;

// Conting Area with arrow func syntax
const countAreaArrow = (chickens, caws, pigs) =>
  chickens * 0.2 + caws * 1.5 + pigs * 0.5;

console.log(minNum(100, 40));
console.log(minNum(30, 50));

console.log(min(100, 40));
console.log(min(30, 50));

console.log(shtArrow(30, 50));

console.log(countAreaArrow(30, 5, 8));
