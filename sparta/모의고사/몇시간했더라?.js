function solution(checkIn, checkOut) {
    let answer = 0;
    
    // 체크아웃과 체크인 시간의 차이를 구해서 더해주면 됨 
    for (let i=0; i<7; i++) {
        if (checkOut[i] >= 29) {
            checkOut[i] = 21
        }
        answer += checkOut[i] - checkIn[i]
    }
    return answer;
}

let checkIn = [9, 9, 9, 9, 7, 9, 8];
let checkOut = [23, 23, 30, 28, 30, 23, 23];
console.log(solution(checkIn, checkOut))