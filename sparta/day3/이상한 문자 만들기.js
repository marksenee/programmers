function solution(s) {

    let answer = '';
    let result = s.split(' '); // 단어 기준으로 나눔 ['try', 'hello', 'world']
    
    // 1. for문으로 result에 담긴 각 원소의 인덱스 찾기 
    for (let i = 0; i < result.length; i++) { // i = 0,1,2 
        for(let j = 0; j < result[i].length; j++) { // j = t,r,y, h,e,l,l,o, w,o,r,l,d
            // 2. 각 단어의 인덱스의 짝수 판별 후 대문자 변환
            // console.log(j)
            if(j % 2 === 0) {
                answer += result[i][j].toUpperCase();
            // 3. 각 단어의 인덱스의 홀수 판별 후 소문자 변환 
            } else {
                answer += result[i][j].toLowerCase();
            }
        }
        // 4. result.length -1 (2) 인덱스가 2(world) 보다 작은 0,1은 공백 추가
        if (i < result.length -1) {
            answer += ' ';
        }
    }
    return answer;
}
let s = "try hello world"

console.log(solution(s))
