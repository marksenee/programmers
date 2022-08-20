"""
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
arr	divisor	return
[5, 9, 7, 10]	5	[5, 10]
"""

"""
접근방법
1) arr에 담긴 각 element들을 하나씩 뺌
2) 뺀 element들을 divisor로 나누어줌
3) 나눈 값이 0일 경우 오름차순 정렬 
- 나머지 연산 기호 %
- 오름차순 정렬 sort()
4) 나누어 떨어지는 것이 element가 없을 경우
- element의 개수가 0이면 return -1

"""

arr = [5, 9, 7, 10]
divisor = 5
answer = []

# for문이 먼저 돌고나서 len(answer)가 있는지 없는지 알 수 있음
for i in arr : 
    if i%divisor == 0 :
        answer.append(i)
        answer.sort()
if len(answer) == 0 :
    answer.append(-1)
        
def solution(arr, divisor) : 
    for i in arr : 
       if i%divisor == 0 :
            answer.append(i)
            answer.sort()
    if len(answer) == 0 :
        answer.append(-1)
    return answer