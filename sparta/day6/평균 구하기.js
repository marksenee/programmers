/** 
 1. 문제 설명 
 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요. 
 arr = [1,2,3,4]	
 return = 2.5

 2. 문제 접근
 - 배열에 있는 수들을 꺼낸다. 
 - 꺼낸 원소(수)들을 answer라는 변수에 더해준다. 
 - 더해진 값을 arr의 length만큼 나눈다. 

 3. 알고 있으면 좋은 개념
 - for문
 - reducer
 - lodash(라이브러리를 사용해야 함)
  
 **/

 function solution(arr) {
     let answer = 0;
     let result = 0;

     for (let i=0; i<arr.length; i++) {
        answer += arr[i]
        result = answer/arr.length
     }
     return result;
 
 }

 let arr = [1,2,3,4];
 console.log(solution(arr))