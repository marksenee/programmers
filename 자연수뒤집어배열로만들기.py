# 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
# 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

# 접근 방법
# 1. int -> str 변환
# 2. 변환된 n을 reversed시킴
# 3. reversed 시킨 n을 for문을 돌려서 각각 array에 넣어줌 
# 4. array에 넣어주기 전에 str을 다시 int로 변환시켜줌 
# 5. return array 시켜주기 

# 연습 풀이
n = 12345
array = []
a = reversed(str(n))
# print(a)

for i in a : 
    array.append(int(i)) # int로 변환하는 과정에서 막힘 
    print(array)
    

# 최종 풀이 
n = 12345
array = []
def solution(n) : 
    for i in reversed(str(n)):
        array.append(int(i)) # int로 변환하는 과정에서 막힘 
    return array