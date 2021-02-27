export const factorialAlg = (number) => {
  if (number < 0) {
    return -1;
  }
  if (number === 0) {
    return 1;
  }
  return number * factorialAlg(number - 1);
};
