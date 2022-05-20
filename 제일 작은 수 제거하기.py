# 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
# 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
# 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

# 문제 접근
# 1. if else 사용 (배열 안에 값이 여러개일 경우 제일작은 값만 제거하여 리턴, 값이 하나일 경우 -1 리턴)
# 2. 비교 연산자 활용 (for문 돌려서 arr 안에 값들을 하나씩 비교)
# 3. 비교해서 가장 작은 수의 값은 remove 시켜줌 or 제일 작은 값을 제외한 값을 리스트에 넣어줌 
# 4. 리턴 된 값을 빈 배열에 넣어줌 

# 리스트 내에 특정 값 제거하기 : 리스트명.remove(제거할 값)
# 리스트 내에 특정 값 추가하기 : 리스트명.append(추가할 값)

# 참고 : https://dojang.io/mod/page/view.php?id=1321

arr = [4,3,2,1]
answer = []
small_value = arr[0]
if len(arr) == 1 :
    answer.append(-1)
else :
    for i in arr :
        if i < small_value :
            small_value = i
    arr.remove(small_value)
    print(arr)


def solution (arr) : 
    if len(arr) == 1 :
        answer.append(-1)
    else :
        for i in arr :
            if i < small_value :
                small_value = i
        arr.remove(small_value)
        return arr

# 다른 풀이2 
# 리스트 내부에 최소값 구하기 : min(리스트명)
if len(arr) == 1 : 
    answer.append(-1)
else :
    small_value = min(arr)
    print(small_value)
    arr.remove(small_value)
    
def solution (arr) : 
    if len(arr) == 1 :
        answer.append(-1)
    else :
        small_value = min(arr)
        arr.remove(small_value)
        return arr
    
