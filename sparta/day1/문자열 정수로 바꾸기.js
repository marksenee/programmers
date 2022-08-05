/** 
 1. 문제 설명
 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

 2. 입출력 예
 str = "1234"
 result = 1234

 str="-1234"
 result = -1234

 3. 필요한 개념 
 - 문자를 정수로 변환 
 예) str이 문자일 경우
 - Number(s)
 - parseInt(s)

 - 자바스크립트에서 문자열과 숫자를 *,/ 로 연산하면 숫자로 자동형변환이 된다. 
**/


function solution(s) {
    return parseInt(s)
}
console.log(solution("-1234"))


function solution(str) {
    return +str
}
console.log(solution("-1234"))

function strToInt(str) {
    return str/1
}
console.log(solution("-1234"))
