/**
 1. 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 
 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요. 
 예) [4,7,12]	[true,false,true]	9
  
2. 문제 접근
- false인 인덱스 위치를 찾아냄 
- 찾아낸 인덱스 위치를 absolutes에서 적용시켜 찾아냄
- 찾아낸 인덱스의 숫자를 *(-1) 해서 음수화 시켜줌
- 음수화 시킨 인덱스를 적용시켜줌 
- answer라는 변수에 해당 값들을 더해서 담아줌 
  

3. 필요한 개념 
- 배열 안에 값을 수정/삭제
splice(start , deleteCount , itemN)
 **/

function solution(absolutes, signs) {
    let answer = 0;

    for (let i=0; i<signs.length; i++) {

        if (signs[i] === false) { // 0번째, 1번째 인덱스만 뽑아냄 
            console.log(absolutes[i]) // absolutes에서 0번째 1번째 인덱스를 뽑아냄
            // 뽑아낸 값들을 음수로 변경 
            absolutes[i] = (absolutes[i]) * -1
        }
        // 음수로 변경한 값들을 더해줌 
        answer += absolutes[i]
    }
    return answer;
}

let absolutes = [1,2,3];
let signs = [false,false,true];
console.log(solution(absolutes, signs));