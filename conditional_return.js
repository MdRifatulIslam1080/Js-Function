function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log("even number______");
console.log(isEven(3));
console.log(isEven(4));

// another way

function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  }
  return false;
}
console.log("odd number___");
console.log(isOdd(5));
console.log(isOdd(6));
