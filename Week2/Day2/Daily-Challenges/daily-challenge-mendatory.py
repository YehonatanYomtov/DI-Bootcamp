# 1) Ask the user for a number and a length.
# 2) Create a program that prints a list of multiples of the number until the list length reaches length.

# Examples
# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

user_input = input("Please enter a number and length separated by a comma (i.e. 8, 4): ")

split_list = user_input.split(",")

number = int(split_list[0])
length = int(split_list[1])

list_of_multiples = []

for i in range(1, length + 1) :
    list_of_multiples.append(number * i)

print(list_of_multiples)



