
 function solution(n) {
    let result = 0;

    // n을 문자열 형태로 변환  -> 리스트에 담아주기 위함 
    let str = String(n);
    // 배열에 문자열을 담아주고 정렬시켜줌 
    let arr = Array.from(str);

    // 정렬된 배열을 내림차순 시켜주고 ('')를 기준으로 조인시켜서 문자열로 반환
    let answer = arr.reverse().join('+');

    //각 원소들의 합을 구해야 함 
    for (let i=0; i<arr.length; i++) {
        console.log(parseInt(arr[i]))
        result += parseInt(arr[i])
    }
    return `${answer}=${result}`;
}

 let n = 718253
 console.log(solution(n))