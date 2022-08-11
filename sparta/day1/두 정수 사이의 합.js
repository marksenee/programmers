/** 
 1. 문제 설명
 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

 
 **/

 function solution(a, b) {
    var answer = 0;
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    for(var i=min; i <= max; i++){
        console.log(i)
        answer+=i;
    }
    return answer;
}

 let a = 3;
 let b = 5;
 let n = 0;
 console.log(solution(a,b))

 // https://sururu.tistory.com/139