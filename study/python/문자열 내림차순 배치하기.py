# 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
# s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
# return "gfedcbZ"

s = "Zbcdefg"
# print(s[::-1])

# 1. 문자열 정렬
# 2. 내림차순 배치 
# 3. join 함수 사용 : 리스트의 요소를 문자열로 연결하기 위함 

# array = list(s)
# array.sort(reverse=True)
# print("".join(array))


def solution (s) : 
    list_s = list(s)
    list_s.sort(reverse=True)
    return "".join(list_s)