/** 
1. 문제 설명
문자열 s의 길이가 4 혹은 6이고, 
숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

2. 문제 접근 
1) 문자열의 길이 구하기 
2) 문자열 내부가 숫자인지 확인 isNumber
2) 문자열의 길이가 4 or 6이고, isNumber인지 확인 

isNaN이 안되고 parseInt로 바꿔줘야 하는 이유?

 **/

let s = "1234"
console.log(s)
console.log(parseInt(s))
// console.log(isNaN(s)) // 숫자이면 false 숫자가 아니면 true

function solution(s){
    // 삼항 연산자
    let num = parseInt(s)
    return ((s.length == 4 || s.length == 6) &&  s == parseInt(s)) ? true : false;
}
console.log(solution(s))
