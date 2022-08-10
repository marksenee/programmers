/**
 1. 문제 설명 
 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

 2. 문제 접근 
 - 숫자 형태를 문자열로 변경시켜줌
 - 각 원소들을 array 형태로 담아줌 
 - 각 원소가 담긴 배열을 내림차순 정렬해줌 

 **/

 function solution(n){

    // 배열로 만들기 위해서 숫자 -> 문자 형태로 형변환 
     let str = String(n)

     // 각 원소들을 arr에 담아줌 
     let arr = Array.from(str)

     // 원소들을 reverse()를 이용하여 뒤집고 각 원소들을 number로 변환한 새로운 형태의 배열을 생성 
     let result = arr.reverse().map(Number);
    return result;
 }

 let n = 12345
 console.log(solution(n))