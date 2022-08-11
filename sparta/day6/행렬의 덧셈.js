/** 
 1. 문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 
같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, 
solution을 완성해주세요. 
  
arr = [[1,2],[2,3]]
arr2 = [[3,4],[5,6]]
return = [[4,6],[7,9]]
  
  
 **/

function solution(arr, arr2) {
    let answer = [];

    for (let i=0; i<arr.length; i++) { // arr.length == 2번 
        // console.log("arr", arr[i]) // arr[0] = [1,2] arr[1] = [2,3]
        // console.log("arr2", arr[i].length)
        for (let j=0; j<arr[i].length; j++) {
            // console.log(arr[i][j]) // 1,2,2,3 
            // console.log(arr[i][j] + arr2[i][j])
            answer.push([arr[i][j] + arr2[i][j]])
            console.log(answer);
            
            // 중첩 리스트에 어떻게 담아야 하는가? 

        }

    }
}

function solution(arr1, arr2) {
    var answer = [[]];
    for (var i=0; i<arr1.length; i++){
        answer[i] =[];
        for(var j=0; j<arr1[i].length; j++){
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}

let arr = [[1,2],[2,3]];
let arr2 = [[3,4],[5,6]];
console.log(solution(arr, arr2));

arr[0][0] = 1
arr[0][1] = 2
