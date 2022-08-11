/**
 1. 문제 설명
 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
 전화번호가 문자열 phone_number로 주어졌을 때, 
 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, 
 solution을 완성해주세요. 
  
phone_number = "01033334444"
return = "*******4444"

2. 문제 접근 
- for문 돌려서 뒷자리 4자리를 제외


3. 필요한 개념
- 문자열 치환 replace() 함수 
  
 **/

function solution(phone_number) {
    let answer = "";

    // 뒷자리 4개를 제외한 앞자리 가져오기 
    let front = phone_number.slice(0, -4); // 0번째 인덱스부터 시작해서 -4전까지 출력 

    // 뒷자리 4개 가져오기 
    let back = phone_number.slice(-4);
    // 문자열 변경 "*" -> str 길이만큼 반복하는 것에서 막혔음 (정규표현식 사용)

    let str = front.replace(/[0-9]/g, "*")

    // 두 문자열 합쳐주기 
    answer = str + back

    return answer;
}

function hide_numbers(s){
    // var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요
  
    let result = "*".repeat(s.length - 4)
    let back = s.slice(-4)
    console.log(back)

    return result;
  }


phone_number = "01033334444"
// console.log(solution(phone_number));
console.log(hide_numbers(phone_number));