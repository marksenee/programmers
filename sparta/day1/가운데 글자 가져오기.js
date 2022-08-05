/** 
 가운데 글자 가져오기 
 단어의 길이가 짝수라면 가운데 두 글자를 반환하면 된다. 

 문제 풀이 
 1) 문자열의 길이로 접근해야 함 
 2) 문자열의 길이가 짝수이면 가운데 2글자 추출
 3) 문자열의 길이가 홀수이면 가운데 1글자 추출
 4) 문자열을 추출하기 위해서 문자열 인덱스를 알아야 함 인덱스의 시작은 0 

 문제 풀이에 필요한 개념
 1) 문자열 길이 구하기
 - 문자열을 담은 변수.length
 2) 특정 문자열 추출 
 - 문자열을 담은 변수.substr("시작 위치", "가져올 길이")
 3) 짝수 글자에서 가운데 글자를 가져오려면?
 - 시작 위치 : 총 문자열 길이에서 -1 한 값에서 시작하면 됨
 - 인덱스는 0부터 시작이기 때문! 
 - 가져올 길이 : 2글자를 추출해야 함으로 2.
 4) 홀수 글자에서 가운데 글자를 가져오려면? 
 - 문자열 총 길이에서 / 2를 한 값에서 시작하면 됨
 - 왜냐하면 인덱스는 0부터 시작하기 때문! 
 - 가져올 길이 : 1글자만 가져오면 되므로 1.


 **/


let s = "abcdefg"
// console.log(s.length)

// let answer = s.substr(s.length/2, 1)
// console.log(answer)

//  if(s.length%2 == 0) {
//      let answer =+ s
//     console.log(answer)
//  } else {
//      s.substr(s.length/2, 1)
//  }

 function solution(s){
     let answer = "";
     if(s.length %2 == 0) {
       answer = s.substr(s.length/2-1, 2)
     } else {
        answer  = s.substr(s.length/2, 1)
     }
     return answer;
 }

 console.log(solution("abcdefg"))