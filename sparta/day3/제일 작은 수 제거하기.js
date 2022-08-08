/**
 1. 문제 설명 
  정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, s
  olution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
  예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, 
  [10]면 [-1]을 리턴 합니다.

2. 문제 접근 
- 배열에서 각 숫자들을 for문으로 꺼냄 
- 만약 배열의 길이가 1개 초과라면, 
- i와 arr[i]의 대소관계를 비교함
- 배열의 길이가 1개 이하라면 
- -1 리턴 

3. 알아야 할 개념 
- 배열에서 최소값 찾기 :  Math.min()
- 배열에서 인덱스 알아내기 : 배열.indexOf(찾으려는 값, 검색을 시작할 index)
- 특정 index값 삭제 : splice(startIndex, deleteCount) 
- 내장 객체 
 **/

let arr = [4,3,2,1]

function solution(arr){

    if (arr.length <= 1) {
         return [-1];
    } else {
        let min = Math.min.apply(null, arr);
        arr.splice(arr.indexOf(min), 1);
        
    }
    return arr;
}

console.log(solution(arr))