/**
1. 문제 설명
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
  
2. 문제 접근
- 제곱근 반환
- 반환한 제곱근이 양수인지 판별 
- if/else문 사용해서 제곱근이 있으면 x+1한 값의 제곱을 리턴, 없으면 -1 리턴

3. 알아야 할 개념
- 제곱근 Math.sqrt(x)
- 정수 판단 Number.isInteger(num)

 **/

function solution(n) {
    let answer = Math.sqrt(n)
    let result = 0;
    
    // 반환한 제곱근이 정수인지 판별 
    if (Number.isInteger(answer) == true) {
        // 정수일 경우 제곱근의 +1한 값의 제곱을 리턴
        result = (answer+1)**2;
        return result;
    } else {
        // 제곱근도 없고 정수도 아닐 경우 -1 리턴 
        return result = -1;
    }
}

let n = 121
console.log(solution(n))