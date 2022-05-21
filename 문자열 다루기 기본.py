"""
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
""" 

from operator import truediv


# s = "a234"
# a = "1234"

"""
접근 방법 
1) s의 길이를 구함 len(s)
2) s가 문자인지 숫자인지 판별 
3) 만약 s의 길이가 4 or 6이고, 숫자로만 구성되어 있다면 true, 아니면 false 
"""

"""
문제 풀이에 필요한 개념 
1) 문자열 길이 구하기 len()
2) 문자열이 숫자로 구성되어 있는지 판별 
- str.isdigit("판별하고자 하는 문자열")
- 판별하고자 하는 문자열.isdigit()
3) isdigit
- 문자열 내부에 문자가 1개라도 있을 경우 FALSE 반환
- 문자열 내부가 전부 숫자로 구성되어 있다면 TRUE 반환 
"""

# 오답노트
# 비교할 때 길이가 4이고 6을 판별하기 위해서 4 or 6으로 하면 안되고, len(s) == 4 or len(s) == 6으로 설정해서 비교해야함 

def solution(s) :
    if (len(s) == 4 or len(s) == 6) and s.isdigit() == True :
        return True
    else :
        return False 
    
solution("a2345")

