# 함수 solution은 정수 n을 매개변수로 입력받습니다. 
# n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
# 예를들어 n이 118372면 873211을 리턴하면 됩니다.

n = 118372
# n을 str로 변환
# n을 리스트에 담기
# 리스트에 담긴 n을 정렬시키기 
# 정렬된 n을 reversed 시키기 
# 문자열로 반환 시키기 => join

a = list(str(n))
a.sort(reverse=True)
print(int("".join(a)))
# array.append(int(n))
# # print(array)
# array.sort(reverse=True)
# print(array)


# ls = list(str(int(n)))
# print(ls)
# ls.sort(reverse = True)
# print(int("".join(ls)))

# for i in str(n):
#     array.append(int(i))
#     array.sort(reverse=True)
#     # print(array)
#     result = int("".join(array))   
#     print(result)
#     # a = int(result)
#     # print(a)


# def solution(n) : 
#     for i in str(n):
#         array.append(int(i))
#         array.sort(reverse=True)
#         result = ' '.join(map(str, array))
#         a = int(result)
#         print(a)
#     return result    
