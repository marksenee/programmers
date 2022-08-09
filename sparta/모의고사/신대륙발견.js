function solution(a, b) {

    // 기준 일자 
    // let date = new Date(2022, a-1, b)
    let date = new Date(`2022-${a}-${b}`);
    console.log(date)

    // 일자 더하기 
    date.setDate(date.getDate() + 98);

    let result = date.toLocaleDateString();
    console.log(result)

    let arr = result.split('/')
    console.log(arr)

    // 0번째 = "월" 인덱스와, 2번째 = "달" 인덱스를 가져옴 
    let month = arr[0]
    let day = arr[1]

    return `${month}월 ${day}일`;
 }
console.log(solution(1,18))

