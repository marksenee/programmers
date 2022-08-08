/**
 
 1. 문제 설명
 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. 
 a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이) 

 2. 문제 접근
 1) 배열 a와 배열 b의 원소를 각각 하나씩 꺼내서 곱함
 2) 곱해진 원소들을 더하기 연산시켜서 return 값 출력 
 **/

 function solution(a,b) {
     let answer = 0;
     for (let i=0; i<a.length; i++){
        //  console.log(a[i])
        //  console.log(b[i])
         answer += a[i] * b[i]
     }
     return answer;
 }

 let a = [1,2,3,4]
 let b = [-3,-1,0,2]
 let answer = 0;
 console.log(solution(a,b))
