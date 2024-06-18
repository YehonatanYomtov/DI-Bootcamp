# # Exercise 1
# # Instructions
# # Write a script that inserts an item at a defined index in a list.
# my_list = [1, 2, 3, 4, 5]

# # First argument is the index the second is the value to insert.
# my_list.insert(3, 8)
# print(my_list)

# --------------------

# # Exercise 3
# # Instructions
# # Write a script that counts the number of spaces in a string.

# my_string = "My name is Yehonatan Yomtov"

# count = my_string.count(" ")
# print(count)

# --------------------

# # Exercise 3
# # Instructions
# # Write a script that calculates the number of upper case letters and lower case letters in a string.

# my_string = "My name is Yehonatan Yomtov"

# cased_letters = 0
# low_cased_letters = 0

# for letter in my_string:
#     if letter.isupper():
#         cased_letters += 1
#     else:
#         low_cased_letters += 1

# print("cased_letters -> ", cased_letters)
# print("low_cased_letters -> ", low_cased_letters)

# --------------------

# # Exercise 4
# # Instructions
# # Write a function to find the sum of an array without using the built in function:

# #     >>>my_sum([1,5,4,2])
# #     >>>12

# def my_sum(my_list):
#     sum_of_list = 0

#     for num in my_list:
#         sum_of_list += num
    
#     return sum_of_list

# print(my_sum([1,5,4,2]))

# --------------------

# # Exercise 5
# # Instructions
# # Write a function to find the max number in a list

# #     >>>find_max([0,1,3,50])
# #     >>>50

# def find_max(my_list):
#     return max(my_list)

# print(find_max([0,1,3,50]))

# --------------------

# # Exercise 6
# # Instructions
# # Write a function that returns factorial of a number

# #     >>>factorial(4)
# #     >>>24

# import math

# def factorial(num): 
#     return math.factorial(num)

# print(factorial(4))

# --------------------

# # Exercise 7
# # Instructions
# # Write a function that counts an element in a list (without using the count method):

# #     >>>list_count(['a','a','t','o'],'a')
# #     >>>2

# def list_count(my_list, char):
#     count = 0

#     for letter in my_list:
#         if letter == char:
#             count += 1
#         else: 
#             pass

#     return count


# print(list_count(['a','a','t','o'],'a'))

# --------------------

# # Exercise 8
# # Instructions
# # Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:

# #     >>>norm([1,2,2])
# #     >>>3

# import math

# def norm(my_list):
#     sum_of_squares = 0
#     for num in my_list:
#         sum_of_squares += num ** 2
    
#     l2_norm = math.floor(math.sqrt(sum_of_squares))

#     return l2_norm

# print(norm([1,2,2]))

# --------------------

# # Exercise 9
# # Instructions
# # Write a function to find if an array is monotonic (sorted either ascending or descending)

# #     >>>is_mono([7,6,5,5,2,0])
# #     >>>True

# #     >>>is_mono([2,3,3,3])
# #     >>>True

# #     >>>is_mono([1,2,0,4])
# #     >>>False

# def is_mono(my_list):
#     if all(my_list[i] <= my_list[i + 1] for i in range(len(my_list) - 1)):
#         return True
#     elif all(my_list[i] >= my_list[i + 1] for i in range(len(my_list) - 1)):
#         return True
#     else:
#         return False

# print((is_mono([7,6,5,5,2,0])))
# print((is_mono([2,3,3,3])))
# print((is_mono([1,2,0,4])))

# --------------------

# # Exercise 10
# # Instructions
# # Write a function that prints the longest word in a list.

# def find_longest_word(sentense):
#     sentense_to_list = sentense.split()
#     return max(sentense_to_list, key = len)

# print(find_longest_word("This is the most I can talk in a lifetime"))

# --------------------

# # Exercise 11
# # Instructions
# # Given a list of integers and strings, put all the integers in one list, and all the strings in another one.

# list_of_strings =[]
# list_of_integers =[]

# def sorter_fn(my_list):
#     for val in my_list:
#         if isinstance(val, str):
#             list_of_strings.append(val)
#         else:
#             list_of_integers.append(val)

# sorter_fn(["Hi", 1, 2, 3, "My name", 55, "is", 100, "Yehonatan"])

# print(list_of_strings)
# print(list_of_integers)

# --------------------

# # Exercise 12
# # Instructions
# # Write a function to check if a string is a palindrome:

# #     >>>is_palindrome('radar')
# #     >>>True

# #     >>>is_palindrome('John')
# #     >>>False

# def is_palindrome(word):
#     reversed_word = word[::-1]

#     if reversed_word == word:
#         return True
#     else: 
#         return False

# print(is_palindrome('radar'))
# print(is_palindrome('John'))

# --------------------

# # Exercise 13
# # Instructions
# # Write a function that returns the amount of words in a sentence with length > k:

# #     >>>sentence = 'Do or do not there is no try'
# #     >>>k=2
# #     >>>sum_over_k(sentence,k)
# #     >>>3

# sentence = 'Do or do not there is no try'
# k=2

# def sum_over_k(string, length):
#     string_to_list = string.split()
#     amount = 0

#     for word in string_to_list:
#         if len(word) > length:
#             amount += 1
    
#     return amount


# print(sum_over_k(sentence,k))

# --------------------

# # Exercise 14
# # Instructions
# # Write a function that returns the average value in a dictionary (assume the values are numeric):

# #     >>>dict_avg({'a': 1,'b':2,'c':8,'d': 1})
# #     >>>3

# import math

# def dict_avg(my_dict):
#     my_dict_sum = 0

#     for value in my_dict.values():
#         if isinstance(value, int):
#             my_dict_sum += value
#         else: 
#             continue

#     average = math.floor(my_dict_sum / len(my_dict))

#     return average


# print(dict_avg({'a': 1,'b':2,'c':8,'d': 1}))

# --------------------

# # Exercise 15
# # Instructions
# # Write a function that returns common divisors of 2 numbers:

# #     >>>common_div(10,20)
# #     >>>[2,5,10]

# def common_div(num1, num2):
#     shorter_list = None
#     list_of_common_div = []

#     if num1 < num2:
#         shorter_list = [num + 1 for num in range(0, num1)]
#     else:
#         shorter_list = [num + 1 for num in range(0, num2)]

#     for num in shorter_list:
#         if num1 % num == 0 and num2 % num == 0:
#             list_of_common_div.append(num)

#     return list_of_common_div

# print(common_div(10,20))

# --------------------

# # Exercise 16
# # Instructions
# # Write a function that test if a number is prime:

# #     >>>is_prime(11)
# #     >>>True

# from math import sqrt

# def is_prime(num):
#     if num <= 1 or (num % 2 == 0 and num > 2): 
#         return False

#     return all(num % i for i in range(3, int(sqrt(num)) + 1, 2))

# print(is_prime(11))

# --------------------

# # Exercise 17
# # Instructions
# # Write a function that prints elements of a list if the index and the value are even:

# #     >>>weird_print([1,2,2,3,4,5])
# #     >>>[2,4]

# def weird_print(my_list):
#     nums_that_equal_their_index = []

#     for i, num in enumerate(my_list):
#         if num == i and num % 2 == 0:
#             nums_that_equal_their_index.append(num)
#         else: 
#             continue
    
#     return nums_that_equal_their_index

# print(weird_print([1,2,2,3,4,5]))

# --------------------

# # Exercise 18
# # Instructions
# # Write a function that accepts an undefined number of keyworded arguments and return the count of different types:

# #     >>>type_count(a=1,b='string',c=1.0,d=True,e=False)
# #     >>>int: 1, str:1 , float:1, bool:2

# def type_count(**kwargs):
#     count_of_types = {}
    
#     for val in kwargs.values():
#         if type(val).__name__ in count_of_types:
#             count_of_types[type(val).__name__] += 1
#         else:
#             count_of_types[type(val).__name__] = 1

#     return count_of_types
# print(type_count(a = 1, b = 'string',c = 1.0, d = True, e = False))

# --------------------

# # Exercise 19
# # Instructions
# # Write a function that mimics the builtin .split() method for strings.
# # By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.

# def my_split(string, split_by = " "):
#     string_to_list = []
#     word = ''

#     for char in string:
        
#         if char != split_by:
#             word += char
#         elif char == split_by:
#             string_to_list.append(word)
#             word = ''
            
#     if word:
#         string_to_list.append(word)
    
#     return string_to_list

# print(my_split("My name is: Yehoantan"))
# print(my_split("My name is: Yehoantan", ":"))

# --------------------

# # Exercise 20
# # Instructions
# # Convert a string into password format.
# # Example:
# # input : "mypassword"
# # output: "***********"

# def convert_to_password(string):
#     string_to_list = list(string)
    
#     password_format = ['*' for _ in range(len(string_to_list))]
    
#     return ''.join(password_format)

# print(convert_to_password("mypassword"))