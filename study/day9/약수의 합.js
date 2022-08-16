/** 
1. 문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

2. 입출력 예시
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

3. 문제 접근 
- 1부터 입력받은 n까지를 나누기를 for문 돌린다.
- 입력받은 n이 1부터 n까지를 입력받고 나눠서 0이 되는 숫자만 추출
- 추출한 숫자들을 sum이라는 변수에 더해서 return시켜준다. 

 **/

function solution(n) {
    for (let i=1; i<n+1; i++) {
        if (n%i === 0) {
            sum += i
        }

    }
    return sum;
}


let n = 12;
let sum = 0;
console.log(solution(n))



