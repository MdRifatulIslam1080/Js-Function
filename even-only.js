function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      sum = sum + number;
    }
  }
  return sum;
}

const sum = sumOfEvenNumbers([34, 5, 32, 2, 5, 76, 3]);
console.log("sum of even number:", sum);
