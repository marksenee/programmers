/**
 1. 문제 설명
    새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 
    이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 
    즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
    놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 
    solution 함수를 완성하세요. 단, 금액이 부족하지 않으면 0을 return 하세요. 

2. 문제 접근
- 변수 선언 및 초기값 할당
- for문을 count만큼 돌림
- for문이 돌때마다 cnt라는 변수를 1씩 증가시켜줌
- price와 cnt(이용 횟수)를 곱해줌
- 횟수 만큼 돌려서 곱한 값을 sum이라는 변수에 담아서 더해줌
- if/else 문으로 sum과 money를 비교
- sum이 money 보다 크면 sum-money 한 값을 리턴
- 작으면 0을 리턴 
 **/

function solution(price, money, count) {
    let cnt = 0;
    let sum = 0;
    let answer = 0;

    for (let i=0; i<count; i++) {
        cnt += 1; // for문이 돌 때 마다 cnt를 하나씩 올려줌 
        sum += price * cnt;
    }
    if (sum > money) {
        answer = sum-money;
        return answer;
    } else {
        return answer = 0;
    }
}

let price = 3;
let money = 20;
let count = 4;

console.log(solution(price, money, count));