/** 
 1. 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
 각 단어의 짝수번째 알파벳은 대문자로, 
 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, 
 solution을 완성하세요.
 예) s = "try hello world"	
 return = "TrY HeLlO WoRlD"

 2. 문제 접근 
 1) 문자열 하나씩 쪼개서 리스트에 담기 
 2) 리스트에 담긴 단어를 인덱스별로 짝/홀수 판별 
 3) 짝수는 대문자, 홀수는 소문자 
 3) 다시 문자열로 변경 해서 리턴 

 3. 알아야 할 개념
 1) 대문자/소문자 변경
 2) Array.from(문자열을 담은 변수)
 3) 나머지 % 구하기 
 4) 다시 문자열로 변경 
 5) 문자열.char(i).toUpperCase() // i번째 인덱스를 대문자로 치환 

 **/

let s = "try hello world"

function solution(s) {
    let arr = Array.from(s)
    let answer = "";

    // 1. for문으로 arr에 담긴 각 원소의 인덱스 찾기 
    for (let i=0; i<arr.length; i++) { // <=로 하게 되면 15번째 원소가 undefined 생김
        // console.log(i) // 원소들의 인덱스 출력 
        // console.log(arr[i]) // 각 원소들을 뽑아서 확인할 수 있음 

        // 2. 짝수 판별 후 대문자 변환
        if (i % 2 == 0) {
             answer += s.charAt(i).toUpperCase();
             return answer;
        
        // 2. 홀수 판별 후 소문자 변환
        } else {
            answer += s.charAt(i).toLowerCase();
            return answer;
        }
    }
    // 3. 1~3과정 arr.length만큼 반복 
    return answer;
}

console.log(solution("try hello world"))

  