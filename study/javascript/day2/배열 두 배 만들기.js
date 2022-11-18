function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }
  return answer;
}

// 다른 풀이
function solution2(numbers) {
  return numbers.map((number) => number * 2);
}

console.log(solution([1, 2, 100, -99, 1, 2, 3]));
console.log(solution2([1, 2, 100, -99, 1, 2, 3]));
