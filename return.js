function tenTimes(number) {
  const result = number * 10;
  return result;
}

function cutHalf(number) {
  const half = number / 2;
  return half;
}
tenTimes(5);
const output = tenTimes(5);
console.log("output", output);

cutHalf(10);
const newOutput = cutHalf(10);
console.log("newOutput", newOutput);
