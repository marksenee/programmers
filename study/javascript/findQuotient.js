/*
1. 문제 설명
정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

2. 문제 접근
1) 몫을 구하려면 num1/num2로 나눈 값을 parseInt() 함수에 넣어서 정수 부분만 구해야 한다. 
*/

function solution(num1, num2) {
  return parseInt(num1 / num2);
}

console.log(solution(7, 2));
