# 함수 solution은 정수 n을 매개변수로 입력받습니다. 
# n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
# 예를들어 n이 118372면 873211을 리턴하면 됩니다.

n = 118372

# a = list(str(n))
# a.sort(reverse=True)
# print(int("".join(a)))

# 1. 문자열
# 2. 리스트화
# 3. 내림차순 
# 4. join 함수 사용 
# 5. int로 변환 (return 값이 int이기 때문)


# 첫번째 풀이 -> 코드는 돌아가지만 프로그래머스상 오답 
# def solution(n) : 
#     for i in str(n):
#         array.append(int(i))
#         array.sort(reverse=True)
#         result = ' '.join(map(str, array))
#         a = int(result)
#         print(a)
#     return result    

a = list(str(n))
a.sort(reverse=True)
print("".join(a))

def solution(n):
    list_n = list(str(n))
    list_n.sort(reverse=True)
    print("".join(list_n)) 
    