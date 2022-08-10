/** 
 1. 문제 설명 
  양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
  예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
  자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

 2. 문제 접근
 1) 자릿수 합 구하기
 - 문자열로 바꿔서 배열 안에 넣기 
 - 배열 안에 넣은 원소들을 하나씩 꺼내서 더하기 
 - 더한 값을 담은 변수와 2번 진행 
 2) 구한 합으로 x가 나누어 떨어지는지 확인
 3) 1과 2를 만족하면 true, 아니면 false 리턴 

 **/

function solution(arr) {
    let str = String(arr);
    let array = Array.from(str);
    let x = 0;

    for (let i=0; i<array.length; i++) {
        x += parseInt(array[i])
    }
    if (arr%x === 0) {
        return true;
    } else {
        return false;
    }
}

// 삼항 연산자 사용 
function solution(arr) {
    let str = String(arr);
    let array = Array.from(str);
    let x = 0;

    for (let i=0; i<array.length; i++) {
        x += parseInt(array[i])
    }
    return arr % x === 0 ? true : false;
}


// 다른 풀이
function solution(x) {
    var a = 0;
    var s = (x+"").split("").map(Number);

    for(let i of s){
        a += i;
    }

    return x%a == 0 ? true : false;
}

let arr = 13;
console.log(solution(arr))

