# # Challenge 1 : Sorting
# # Instructions
# # 1) Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# # 2) Use List Comprehension
# # Example:

# # Suppose the following input is supplied to the program: without,hello,bag,world
# # Then, the output should be: bag,hello,without,world

# input = "without,hello,bag,world".split(',')

# sorted_input = sorted([word for word in input])

# result = ','.join(sorted_input)

# print(f"==>> result: {result}")

# --------------------

# Challenge 2 : Longest Word
# Instructions
# 1) Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

def find_longest_word(sentence):
   to_list = sentence.split(' ')
   
   longest_word = max(to_list, key=len)
   
   print(f"==>> longest_word: {longest_word}")

find_longest_word("Margaret's toy is a pretty doll.")
find_longest_word("A thing of beauty is a joy forever.")
find_longest_word("Forgetfulness is by all means powerless!")