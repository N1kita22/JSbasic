function sum(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}

function compareSum(firstFrom, firstTo, secondFrom, secondTo) {
  let firstSum = sum(firstFrom, firstTo);
  let secondSum = sum(secondFrom, secondTo);
  if (firstSum > secondSum) {
    return true;
  } else {
    return;
  }
}

console.log(sum(5, 10)); // ===> 45
console.log(sum(11, 11)); // ===> 11

compareSum(5, 10, 3, 7);
compareSum(3, 7, 3, 8);
