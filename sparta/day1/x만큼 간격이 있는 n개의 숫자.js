/** 
1) 문제 설명 
함수 solution은 정수 x와 자연수 n을 입력 받아, 
x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

2) 문제 접근 방법 
- x의 배수를 n만큼 출력 
- answer라는 리스트를 만들어서 출력한 값들을 넣어줘야 함 

3) 문제 풀기 위해 알아야 하는 개념
- array 선언
- array에 대한 이해 
- push 함수에 대한 이해 
 **/

let x = 2;
let n = 5;
// let answer = Array();

// for (let i=1; i<=n; i++) {
//     // console.log(x*i)
//     answer[i] = x*i;
// }


function solution(x,n){
    let answer = [];
    for (let i=1; i<=n; i++) {
            console.log(x*i)
            answer.push(x*i)
        // answer[i] = x*i;
    }
    return answer
}
console.log(solution(x,n))
// [ <1 empty item>, 2, 4, 6, 8, 10 ] 문제 발생 

// empty가 들어가는 문제를 해결하기 위해 push 함수 사용 

function solution(x,n) {
    let answer = [];
    for (let i=1; i<=n; i++) {
        answer.push(x*i)
    }
    return answer;
}
console.log(solution(x,n))
