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
# 1) Create a string of all the letters in the alphabet
# 2) Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

# alphabet = 'abcdefghijklmnopqrstuvwxyz'

# alphabet_to_list = list(alphabet)

# for letter in alphabet_to_list :
#     if letter in ['a', 'e', 'i', 'o', 'u'] :
#         print(f"The letter {letter} is a vowel")
#     else : print(f"The letter {letter} is a consonant")

# -------------------

# Exercise 6: Words And Letters
# Instructions
# 1) Ask a user for 7 words, store them in a list named words.
# 2) Ask the user for a single character, store it in a variable called letter.
# 3) Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# 4) If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.


# user_input_words = input("Please enter 7 words: ")

# words = user_input_words.split()

# letter = input("Please enter a letter: ")

# for i, word in enumerate(words) :
#     if letter in word :
#         index = word.index(letter)
#         print(index)
#     else :
#         print(f"Hey this is the wrd you wrote: {word}, and this is the letter you chose: {letter}, unfortunatly the letter doesn't exist in any of the words try again!")

# -------------------

# Exercise 7: Min, Max, Sum
# Instructions
# 1) Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.

# list_of_a_million = list(range(1,1000001))

# min_number = min(list_of_a_million)
# max_number = max(list_of_a_million)

# print(sum(list_of_a_million))

# -------------------

# Exercise 8 : List And Tuple
# Instructions
# 1) Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.
# 2) Suppose the following input is supplied to the program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')

# user_input = input("Enter a sequence of comma-separated numbers : ")

# a_list = user_input.split(",")

# a_tuple = tuple(a_list)

# print(a_list, a_tuple)


# -------------------

# Exercise 9 : Random Number
# Instructions
# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.
