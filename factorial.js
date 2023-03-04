// 3. Calculate the factorial of a number using recursion

const factorial = num => {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

module.exports = factorial;