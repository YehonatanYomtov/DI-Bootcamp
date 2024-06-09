# 1) Using the input function, ask the user for a string. The string must be 10 characters long.
#  - If it’s less than 10 characters, print a message which states “string not long enough”.
#  - If it’s more than 10 characters, print a message which states “string too long”.
#  - If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# user_input = input("Enter a string at least 10 characters long ")

# length = len(user_input)

# if length < 10 : 
#    print("string not long enough")
# elif length > 10 :
#    print("string too long")
# elif length == 10 :
#    print("perfect string")

# -----------------------

# 2) Then, print the first and last characters of the given text.

# user_input = input("Enter a string at least 10 characters long ")

# first_character = user_input[0]
# second_character = user_input[-1]

# print(first_character + " " + second_character)

# -----------------------

# 3) Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

# user_input = input("Enter a string at least 10 characters long ")

# constructed_character = ''

# for i in range(len(user_input)) :
#    constructed_character += user_input[i]
#    print(constructed_character)

# -----------------------

#Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# import random

# user_input = input("Enter a string at least 10 characters long ")

# user_input_to_list = list(user_input)

# random.shuffle(user_input_to_list)

# shuffled_string = ''.join(user_input_to_list)

# print(shuffled_string)



