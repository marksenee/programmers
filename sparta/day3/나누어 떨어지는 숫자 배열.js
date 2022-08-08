/** 
1. 문제 설명
array의 각 element 중 divisor로 나누어 떨어지는 값을 
오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

2. 문제 접근
1) 나누어 떨어지는 공식 
- arr의 각 원소들을 divisor로 나눠서 나머지가 0이 되면 
2) 만약 divisor로 나눠서 나누어 떨어지면 나누어 떨어지는 숫자를 담은 배열을 반환
3) 나누어 떨어지지 않는다면 [-1] 리턴

3. 알아야 할 개념
1) 오름차순 정렬
- 유니코드로 인식하기 때문에 두가지 인자를 받아서 크기를 비교하는 함수를 작성해야 함 
 **/

function solution(arr, divisor) {
    let answer = [];

    // 오름차순 정렬 
    arr.sort((a, b) => a - b); 

    for (let i=0; i<arr.length; i++) {
        if (arr[i] % divisor == 0 ) {
             answer.push(arr[i]);             
        } 
    }
    // answer에 원소가 하나도 없을 경우 -1 리턴
    if (answer.length == 0) {
        return [-1];
    }

    return answer;
}

let arr = [5,9,7,10]
console.log(arr.sort())
console.log(solution(arr, 5))
