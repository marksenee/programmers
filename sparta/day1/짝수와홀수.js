/** 
 짝수, 홀수 판별
 2로 나누었을 때 나머지가 0이 되면 짝수
 그게 아니면 홀수 

 문제 풀이 
 1) 함수 생성 
 2) num라는 인자 값을 받아서 그 num가 짝수인지, 홀수 인지 판별할 것
 3) 값을 할당시켜 줄 변수 선언
 4) if~else 구문으로 num이 짝수인지, 홀수인지 판별 
 5) % 는 나머지 연산자 
 6) num을 판별하여 최종적으로 answer를 리턴 시켜줌 
 **/

function solution(num) {
    let answer = "" // 값 할당해 줄 변수 선언 

    if (num % 2 == 0) { //들어온 인자 값이 2로 나누어 떨어지면 
        return answer = "Even"; // "even" 출력 
    } else { // 2로 나누어 떨어지지 않으면 
        return answer = "Odd"; // odd 출력 
    }
    return answer; // 최종 answer를 return 
}

console.log(solution(3))

