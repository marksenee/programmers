/** 
 1. 문제 설명 
 String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
 "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
 seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

 예) 
 seoul = ["Jane", "Kim"]
 return = "김서방은 1에 있다."

 2. 문제 접근 
 1) 배열에서 각 단어의 인덱스를 찾아냄
 2) 인덱스를 찾아서 "김서방은 x에 있다 출력"

 3. 필요한 개념
 1) 배열.indexOf(찾으려는 값, 검색을 시작할 index)
 **/

 // 내 풀이
 function solution(seoul){
      return `김서방은 ${seoul.indexOf("Kim", 0)}에 있다`
 }

 // 다른 풀이
 function findKim(seoul){
    var idx = seoul.indexOf('Kim');
    return "김서방은 " + idx + "에 있다";
  }

 let seoul = ["Jane", "Kim"];
 console.log(solution(seoul))