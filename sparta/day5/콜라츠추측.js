/**
 1. 문제 설명
 1937년 Collatz란 사람에 의해 제기된 이 추측은, 
 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 
 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 
  
 2. 문제 접근
  
 **/

 function solution(n) {
     let cnt = 0;

     // n이 1이 아니면 계속 반복 
     while (n != 1) {

        // n이 짝수이면 
        if (n%2 == 0) {
            n = n/2; // 2로 나눈 값을 n에 담아줌 
        // n이 홀수이면
        } else {
            n = (n*3)+1; // (n*3)+1한 값을 n에 담아줌 
        }
        cnt += 1; // 카운트를 세서 while문이 돌 때마다 1씩 올려줌
     }
     if (cnt >= 500) {
        return -1;
    } else {
        return cnt;
    }
 }

 // 다른 풀이 
 function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}

 let n = 626331;
 console.log(solution(n))

