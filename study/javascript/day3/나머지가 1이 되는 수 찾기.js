/**  
 1. 문제 풀이
 1) n을 x로 나눈 나머지가 1
 2) 가장 작은 자연수 x를 return  
 **/

function solution(n, x) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) return i;
  }
}

console.log(solution(10, 3));
