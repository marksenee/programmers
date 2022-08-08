/** 
1. 문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
다르면 False를 return 하는 solution를 완성하세요. 
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

2. 문제 접근
1) 문자열에서 'p' 와 'P'를 찾아냄 
- 문자열은 하나씩 쪼개기 
- 쪼갠 문자들을 배열에 담기 

2) for문 돌려서 arr에서 각 문자열 하나씩 추출
3) 추출한 문자가 'p' 이거나 'P'이면 p_array 리스트에 담기
4) 추출한 문자가 'y' 이거나 'Y' 이면 y_array 리스트에 담기 
5) p_array와 y_array에 담긴 각 원소의 개수를 비교 
6) p_array와 y_array의 원소에 개수가 같으면 true, 다르면 false


3. 알아야 할 개념
1) 논리 연산자 and, or
2) 조건문 if/else
2) 문자열 하나씩 배열에 담기 Array.from(문자열 변수)
3) 특정 배열에서 문자열 하나씩 꺼내는 for문 
4) push 함수 
 **/

// 풀이1
function solution (s) {
    let arr = Array.from(s) // 문자열 쪼개서 arr에 원소 하나씩 담기 
    let p_array = []; 
    let y_array = [];

    for (let answer of arr) {
        console.log(answer)
        if(answer == 'p') {
            p_array.push(answer)
        } else if (answer == 'P') {
            p_array.push(answer)
        } 
    
        if(answer == 'y') {
            y_array.push(answer);
        } else if (answer == 'Y') {
            y_array.push(answer)
        }
        
    }
    
    // p가 담긴 원소의 개수와 y가 담긴 원소에 개수를 비교
    if (p_array.length == y_array.length) {
        return true // 원소의 개수가 서로 같으면 true
    } else {
        return false // 서로 다르면 false
    }

}

// 풀이2
function solution (s) {
    let arr = Array.from(s) // 문자열 쪼개서 arr에 원소 하나씩 담기 
    let p_array = []; 
    let y_array = [];

    for (let answer of arr) {
        console.log(answer)
        if(answer == 'p' || answer == 'P') {
            p_array.push(answer)
        } else if (answer == 'y' || answer == 'Y') {
            y_array.push(answer)
        }
    }
    // p가 담긴 원소의 개수와 y가 담긴 원소에 개수를 비교
    if (p_array.length == y_array.length) {
        return true // 원소의 개수가 서로 같으면 true
    } else {
        return false // 서로 다르면 false
    }
}

console.log(solution("Pyy"))
