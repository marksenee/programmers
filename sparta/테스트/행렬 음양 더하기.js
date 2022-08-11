function solution(arr1, arr2, signs) {
    let answer = [[]];

    for (let i=0; i<arr1.length; i++){
        answer[i] =[];
        console.log(answer[i]) // []

        for(let j=0; j<arr1[i].length; j++){
            if (signs[i][j] === false) {
                arr1[i][j] = (arr1[i][j]) * -1
                arr2[i][j] = (arr2[i][j]) * -1
            }
            console.log(arr1[i][j] + arr2[i][j]) // 10,8,-7,-9,8,-11
            answer[i].push(arr1[i][j] + arr2[i][j])
        }
    }
    return answer;
}



let arr = [[5,7,1],[2,3,5]];
let arr2 = [[5,1,6],[7,5,6]];
let signs = [[true,true,false],[false,true,false]];
console.log(solution(arr, arr2, signs));