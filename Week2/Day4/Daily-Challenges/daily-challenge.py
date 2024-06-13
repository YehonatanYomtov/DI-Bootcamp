# Instructions
# Given a “Matrix” string:

#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!


# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:

# 7	i	i
# T	s	x
# h	%	?
# i		#
# s	M	
# $	a	
# #	t	%
# ^	r	!


# Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
# To reproduce the grid, the matrix should be a 2D list, not a string



# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.

# Hints:
# Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message

# Hint (if needed) : Look at the remote learning “Matrix” videos

import string

matrix_str = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

matrix = [list(row) for row in matrix_str.split('\n')]

col = len(matrix[1]) if len(matrix[0]) == 0 else len(matrix[0])

decryption = ''

def is_punctuation(char):
   return char in string.punctuation

def is_whitespace(char):
   return char in string.whitespace

def is_number_string(char):
   return char.isdigit()

def reduce_whitespace(s):
   return ' '.join(s.split())

for i, e in enumerate(range(0, col)):
   for index, row in enumerate(matrix):
      if is_punctuation(row[i]) or is_whitespace(row[i]) or is_number_string(row[i]):
         row[i] = " "
      
      decryption += row[i]

result = reduce_whitespace(decryption)

print(f"==>> decryption: {result}")
      

