/** 
1. 문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, 
solution을 완성하세요. 
예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

예)
n = 3
return = "수박수"

2. 문제 접근
1) n의 길이만큼 반복
2) 인덱스가 짝수이면 "수", 홀수이면 "박"
3) console.log(i)를 뽑아보면 해당 인덱스를 뽑아줌 
**/

function solution(n){
    let answer = "";

    for (let i=0; i<n; i++) {
        if ( i%2 == 0) {
            answer += "수"
        } else {
            answer += "박"
        }
    }
    return answer;
}
console.log(solution(4))

