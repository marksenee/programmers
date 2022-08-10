/** 
 1. 문제 설명
 함수 solution은 정수 n을 매개변수로 입력받습니다. 
 n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
 예를들어 n이 118372면 873211을 리턴하면 됩니다. 

 2. 문제 접근
 - n을 문자열 형태로 변환
 - array에 변환한 형태를 담아줌
 - array에 있는 원소들을 reverse() 시켜주고 map함수를 사용해서 내림차순 정렬한 새로운 배열 만듬
 - join을 이용하여 각 원소들을 합쳐준다. 
  
 **/

 function solution(n) {
     // n을 문자열 형태로 변환  -> 리스트에 담아주기 위함 
     let str = String(n);
     // 배열에 문자열을 담아주고 정렬시켜줌 
     let arr = Array.from(str).sort();
     // 정렬된 배열을 내림차순 시켜주고 ('')를 기준으로 조인시켜서 문자열로 반환
     let answer = arr.reverse().join('');
     // string인 answer를 정수형태로 변환시켜줌 
     let result = parseInt(answer);
     return result;
 }

 let n = 118372
 console.log(solution(n))