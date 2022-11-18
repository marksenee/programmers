function solution(n) {
  let answer = 0;
  // n 이하의 짝수를 모두 더한 값
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(10));
