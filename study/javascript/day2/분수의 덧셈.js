function solution(denum1, num1, denum2, num2) {
  let answer = [];
  let numerator = denum1 * num2 + denum2 * num1;
  let denominator = num1 * num2;
  console.log(numerator);
  //   let denominator2 = num1 * num2;
  //   let result = numerator1 / denominator + numerator2 / denominator;
  //   let result2 = result.toString().split(".");
  //   console.log(result2);
  let result = [];
  let result2 = [];

  for (let i = 0; i <= denominator; i++) {
    if (denominator % i === 0) {
      result.push(i);
    }
  }
  for (let i = 0; i <= numerator; i++) {
    if (numerator % i === 0) {
      result2.push(i);
    }
  }

  return result2;
}

console.log(solution(1, 2, 3, 4));
