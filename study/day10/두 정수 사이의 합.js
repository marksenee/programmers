/** 
 1. 문제 설명 
    두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
    예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

 2. 문제 접근 
 1) a와 b 사이에 숫자들을 새로운 배열에 담아줌 
 - for문 돌려서 새로운 배열에 a,b 사이의 숫자들을 담아줌 
 2) 배열 안에 있는 숫자들을 추출해서 sum 변수에 추출한 숫자들을 더해줌 
 
  
 3. 어려웠던 부분 
 - min, max를 사용하면 for문을 2번 돌리지 않아도 되는데 for문 2번 돌려서 시간 복잡도가 커졌을 것이다. 
 - 두 정수의 대소 관계 비교를 위해 내장 함수인 min, max를 이용해주면 됨 

  
 **/
 // 풀이 1 -> 출력 크기 초과됨 
 function solution (a, b) {
     let result = [];
     let sum = 0;

     if ( a < b) {
        for (let i=a; i<b+1; i++) {
            result.push(i)
            console.log(result)
         }
     } else {
        for (let i=b; i<a+1; i++) {
            result.push(i)
            console.log(result)
         }
     }

     for (let j=0; j<result.length; j++) {
         sum += result[j];
     }
     return sum;
 }

 // 풀이 2
 function solution2 (a,b) {
     let sum = 0;

     let min = Math.min(a,b);
     let max = Math.max(a,b);

     for (let i=min; i<max+1; i++) {
        sum += i;
     }
     return sum;
 }

 // 풀이3
 function solution3(a,b) {
    let result = [];
    let sum = 0;

    if ( a < b) {
       for (let i=a; i<b+1; i++) {
           sum += i
        }
    } else {
       for (let i=b; i<a+1; i++) {
           sum += i
        }
    }
    return sum;
 }

 let a = 5;
 let b = 3;
 console.log(solution(a,b));
 console.log(solution2(a,b));
 console.log(solution3(a,b));