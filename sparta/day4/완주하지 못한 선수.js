/** 
 1. 문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

예)
participant = ["leo", "kiki", "eden"]
completion = ["eden", "kiki"]
return = ["leo"]

2. 문제 접근 
1) 변수 선언
2) for문 돌려서 participant와 completion의 원소를 꺼내서 비교
3) 서로 같지 않으면, 같이 않은 원소만 꺼내서 answer 배열에 담아줌

3. 알아야 할 개념
4. 막히는 부분 
- 동명이인 처리 
 **/



function solution(participant, completion) {
    // 정렬
    participant.sort()
    completion.sort()

    for (let i = 0; i < participant.length; i++) {
        
        console.log("참여자", participant[i])
        console.log("완주자", completion[i])

        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}

let participant = ["mislav", "stanko", "mislav", "ana"]
let completion = ["stanko", "ana", "mislav"]

console.log(solution(participant, completion))