/** 
 1. 문제 설명  
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

2. 문제 접근 
1) 숫자 -> 문자열로 변환 
2) 배열에 담기
3) for문 돌려서 각 원소들을 하나씩 꺼내줌
4) 꺼낸 원소들을 number로 다시 형변환 시켜줌 
5) answer라는 변수에 number 원소들을 하나씩 더해서 담아줌 
**/

function solution(n){
    let answer = 0;
    let str = String(n)
    let arr = Array.from(str)

    for (let i=0; i<arr.length; i++) {
        answer += Number(arr[i]); //parseInt로 해줘도 됨 
    }
    return answer;

}
let n = 123
console.log(solution(n))