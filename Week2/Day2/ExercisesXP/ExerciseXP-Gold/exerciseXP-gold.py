# Exercise 1: Concatenate Lists
# Instructions
# 1) Write code that concatenates two lists together without using the + sign.

# list_one = [1,2,3]
# list_two = [4,5,6]

# list_one.extend(list_two)
# print(list_one)

# -------------------

# Exercise 2: Range Of Numbers
# Instructions
# 1) Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

# for num in range(1500, 2501) :
#      if num % 5 == 0 and num % 7 == 0:
#         print(num)

# -------------------

# Exercise 3: Check The Index
# Instructions
# Using this variable

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# 1) Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
# Example: if input is 'Cortana' we should be printing the index 1

# user_input = input("Please enter your name: ")

# for i, name in enumerate(names) :
#     if user_input == name :
#         print(i)
#         break

# -------------------

# Exercise 4: Greatest Number
# Instructions
# Ask the user for 3 numbers and print the greatest number.
#     Test Data
#     Input the 1st number: 25
#     Input the 2nd number: 78
#     Input the 3rd number: 87

#     The greatest number is: 87

# user_input = input("Please enter 3 numbers: ")

# list_of_numbers = user_input.split()

# largest_number = max(list_of_numbers)

# print(largest_number)

# -------------------

# Exercise 5: The Alphabet
# Instructions
# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

# -------------------

# Exercise 6: Words And Letters
# Instructions
# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.


# Exercise 7: Min, Max, Sum
# Instructions
# Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.


# Exercise 8 : List And Tuple
# Instructions
# Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.
# Suppose the following input is supplied to the program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')


# Exercise 9 : Random Number
# Instructions
# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.
