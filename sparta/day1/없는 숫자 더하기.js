/** 
없는 숫자 더하기 

0-9까지의 숫자들 중 없는 숫자들을 더해서 
numbers가 입력받은 숫자들 중에서 0-9까지 중 없는 숫자들을
더해서 return 

1) 0-9까지 for문 돌림
2) 리스트인 numbers에 있는 값이 0-9에 해당하는자 판별 
- i 값이 numbers에 있는지 includes() 함수 사용 
3) includes() 함수 사용 


1) 0-9까지 없는 수만 뽑아내서 더함 
2) 리스트에 포함되지 않는 숫자

**/

numbers = [1,2,3,4,6,7,8,0]	

arr = [0,1,2,3,4,5,6,7,8,9]
// answer의 변수 선언
// answer는 숫자의 값이 들어가야 하기 때문에 int가 되어야 함 
// let a = ''로 지정하게 되면 문자라서 5+9가 아닌 59로 출력됨 



// for (let i=0; i<10; i++) {
//     // console.log(i) //0,1,2,3,4,5,6,7,8,9
//     // console.log(numbers.includes(i))
//     if (numbers.includes(i) == false) {
//         answer += i;
//         console.log(answer)
//     }
// }

function solution(numbers) {
    let answer = 0;
    for (let i=0; i<10; i++) {
        if (numbers.includes(i) == false) {
            answer += i
        }
    }
    return answer;
}

console.log(solution(numbers))
