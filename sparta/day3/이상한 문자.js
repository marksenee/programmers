let s = "try hello world"

function solution(s) {
    let result = s.split(' ') // 단어 기준으로 나눔 ['try', 'hello', 'world']
    let str = "";
    let answer = [];

    // 1. for문으로 arr에 담긴 각 원소의 인덱스 찾기 
    for (let i=0; i<result.length; i++) { 
        // console.log(i) // 원소들의 인덱스 출력 
        // console.log(result[i]) // 각 원소들을 뽑아서 확인할 수 있음 [ 'try', 'hello', 'world' ]

        for (let j=0; j<result[i].length; j++) { // try, hello, world에서 각 문자별로 꺼내주기 위함 
            // console.log(result[i][j])
            // console.log(j) // 각 단어별로 인덱스를 뽑아줌 

                // 2. 각 단어의 인덱스를 짝수 판별 후 대문자 변환
                if (j % 2 == 0) {
                    str += result[i][j].toUpperCase();                
                // 2. 각 단어의 인덱스를 홀수 판별 후 소문자 변환
                } else {
                    str += result[i][j].toLowerCase();
                }
        }
        answer.push(str)
    }
    answer.join(' ')
    return answer
}

console.log(solution(s))
