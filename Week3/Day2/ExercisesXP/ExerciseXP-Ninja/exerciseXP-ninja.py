# 1) Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# 2) Following are the fixed values of C and H:
#   C is 50.
#   H is 30.
# 3) Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results

# For example, if the user inputs: 100,150,180
# The output should be:
# 18,22,24

import math

c = 50.
h = 30.

user_input = input("Please enter a comma-separated sequence numbers")

user_input_to_list = user_input.split(",")

# If we do this with lists --> list_result = []
result = '' # This line is if we want the exact same output as the example part in the instructions: 18,22,24.

for number in user_input_to_list :
    d = int(number)
    # list_result.append(math.floor(math.sqrt((2 * c * d) / h))) #If we dont care about the specific look of the output :p
    result += f"{'' if result == '' else ','}{math.floor(math.sqrt((2 * c * d) / h))}"

print(result)