# Exercise 1 : When Will I Retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).

# 1) Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# 2) After calculating the age of a person, the function should return the age (the age is an integer).
# 3) Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# 4) Calculate. You may need to do a little more hard-coding here.
# 5) Return True if the person can retire, and False if he/she can’t.

# Some Hints:
# 1) Ask for the user’s gender as “m” or “f”.
# 2) Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
# 3) Call can_retire to get a definite value for whether the person can or can’t retire.
# 4) Display a message informing the user whether they can retire or not.
# As always, test your code to ensure it works.

# from datetime import datetime

# current_year = datetime.now().year
# current_month = datetime.now().month

# user_age_input = input("What is your date of birth (yyyy/mm/dd): ")
# user_gender_input = input("What is your gender (m or f): ")

# to_list = user_age_input.split('/')

# year = int(to_list[0])
# month = int(to_list[1])
# day = int(to_list[2])

# def get_age(year, month, day):
#    age = int(current_year) - year
   
#    if current_month < month or (current_month == month and datetime.now().day < day):
#         age -= 1
   
#    return age

# def can_retire(gender, age):
#    if (gender == "m" and age >= 67) or (gender == "f" and age >= 62):
#       return True
#    else: 
#       return False
   
# print("You can retire" if can_retire(user_gender_input, get_age(year, month, day)) else "You can't retire")

# --------------------

# Exercise 2 : Sum
# Instructions
# 1) Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:
# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)

# Hint: treating our number as a int or a str at different points in our code may be helpful

# def special_addition(num):
#    num_str = str(num)
   
#    first_stage = num_str
#    second_stage = num_str * 2
#    third_stage = num_str * 3
#    fourth_stage = num_str * 4
   
#    special_effect = int(first_stage) + int(second_stage) + int(third_stage) + int(fourth_stage)
   
#    return special_effect

# print(special_addition(3))

# --------------------

# Exercise 3 : Double Dice
# Instructions
# Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between 1 and 6.
# Create a function called throw_until_doubles.
# It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles.
# For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
# This function should return the number of times it threw the dice in total. In the example above, it should return 3.

# Create a main function.
# It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).

# After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.
# Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.
# For example:

# If the results of the throws were as follows (your code would do 100 doubles, not just 3):
# (1, 2), (3, 1), (5, 5)
# (3, 3)
# (2, 4), (1, 2), (3, 4), (2, 2)

# Then my output would show something like this:
# Total throws: 8
# Average throws to reach doubles: 2.67.

import random

amount_of_doubles = 0
amount_thrown = 0

def throw_dice():
   random_through = random.randint(1, 6)
   return random_through

def throw_until_doubles():
   global is_double
   global amount_thrown
   global amount_of_doubles
   
   while 0 < 1:
      dice_one = throw_dice()
      dice_two = throw_dice()

      amount_thrown += 1
      
      if dice_one == dice_two:
         amount_of_doubles += 1
         break
      else:
         pass
      
throw_until_doubles()

# print(f"You got a double 🎉, it took you {amount_thrown} throws." if is_double else '')

def main():
   while amount_of_doubles < 100:
      throw_until_doubles()

   average_throws = amount_thrown / amount_of_doubles

   print(f"You threw {amount_thrown} times, to get {amount_of_doubles}, and the average is {average_throws:.2}")

main()

print(8 )