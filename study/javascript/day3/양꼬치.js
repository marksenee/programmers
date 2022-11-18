function solution(n, k) {
  let answer = 0;

  if (n >= 10) {
    answer = n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;
    return answer;
  } else {
    answer = n * 12000 + k * 2000;
    return answer;
  }
}

console.log(solution(64, 6));
