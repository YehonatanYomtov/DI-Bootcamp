# 🌟 Exercise 1 : Favorite Numbers
# Instructions
# 1) Create a set called my_fav_numbers with all your favorites numbers.
# 2) Add two new numbers to the set.
# 3) Remove the last number.
# 4) Create a set called friend_fav_numbers with your friend’s favorites numbers.
# 5) Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

# my_fav_numbers = {4, 8}
# my_friends_fav_numbers = {1, 2, 3}

# Add
# my_fav_numbers.update([2,6])

#Remove
# my_fav_numbers.discard(6)

# our_fav_numbers = my_fav_numbers.union(my_friends_fav_numbers)
# our_fav_numbers = my_fav_numbers | my_friends_fav_numbers

# -------------------

# 🌟 Exercise 2: Tuple
# Instructions
# 1) Given a tuple which value is integers, is it possible to add more integers to the tuple?
# --> No, Tuples are immutable meaning they cant be changed after they are created. 

# -------------------

# 🌟 Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# 1) Remove “Banana” from the list.
# 2) Remove “Blueberries” from the list.
# 3) Add “Kiwi” to the end of the list.
# 4) Add “Apples” to the beginning of the list.
# 5) Count how many apples are in the basket.
# 6) Empty the basket.
# 7) Print(basket)

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# basket.remove("Banana")

# basket.remove("Blueberries")

# basket.append("Kiwi")

# basket.insert(0, "Apples")

# amount = basket.count("Apples")

# print(amount)

# basket.clear()

# print(basket)



# -------------------

# 🌟 Exercise 4: Floats
# Instructions
# 1) Recap – What is a float? What is the difference between an integer and a float?
# 2) Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# 3) Can you think of another way to generate a sequence of floats?

# --> It's a number with a split of '.' pursued by numbers
# start = 1.5
# end = 5
# step = 0.5


# my_list = []

# while start <= end :
#    my_list.append((start - step) + step)
#    start += step
   

# print(my_list)

# -------------------

# 🌟 Exercise 5: For Loop
# Instructions
# 1) Use a for loop to print all numbers from 1 to 20, inclusive.
# 2) Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

# for number in range (20) :
#    print(number + 1)
   
# for number in range (20) :
#    print(number + 1) if number % 2 == 0 else None



# -------------------

# 🌟 Exercise 6 : While Loop
# Instructions
# 1) Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# count = 0

# while count < 20 :
#    input('What is your name? ')
#    count += 1   

# -------------------

# 🌟 Exercise 7: Favorite Fruits
# Instructions
# 1) Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# 2) Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# 3) Now that we have a list of fruits, ask the user to input a name of any fruit.
# 4) If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# 5) If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# user_input = input("What are your favorite fruits? (Please separate with space) ")

# user_favorite_fruits = user_input.split()

# user_second_input = input("Enter any fruit name ")

# print("You chose one of your favorite fruits! Enjoy!") if user_second_input in user_favorite_fruits else print("You chose a new fruit. I hope you enjoy")

# -------------------

# 🌟 Exercise 8: Who Ordered A Pizza ?
# Instructions
# 1) Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# 2) As they enter each topping, print a message saying you’ll add that topping to their pizza.
# 3) Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# all_toppings = []
# user_input = ''

# while user_input != "quit" :
#    user_input = input("What pizza toppings would you like? ")
#    if user_input == "quit" :
#       break
#    else :
#       all_toppings.append(user_input)
#       print(f"I'll add {user_input} to your pizza")

# for topping in all_toppings :
#    print(topping, "2.5$")

# print(f"Total price: {len(all_toppings) * 2.5}$")

# -------------------

# 🌟 Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# 1) Ask a family the age of each person who wants a ticket.

# 2) Store the total cost of all the family’s tickets and print it out.

# user_input = input("Please enter all ages of the participating people: ")

# total_cost = 0

# list_of_all_ages = user_input.split()

# for age in list_of_all_ages :
#    if int(age) < 3 :
#       total_cost += 0
#    elif int(age) >= 3 and int(age) < 12 :
#       total_cost += 10
#    else :
#       total_cost += 15

# print(f"Total cost: {total_cost}$")

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

# user_input = input("Please enter all ages of the participating people: ")

# list_of_all_valid_ages = user_input.split()

# for  teenage in list_of_all_valid_ages :
#     if int(teenage) == 16 and int(teenage) < 20 :
#         list_of_all_valid_ages.remove(teenage)

# print(list_of_all_valid_ages)

# -------------------

# 🌟 Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", 
#     "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# finished_sandwiches = []

# while "Pastrami sandwich" in sandwich_orders : 
#     sandwich_orders.remove("Pastrami sandwich")

# while sandwich_orders :
#     sandwich = sandwich_orders.pop(0)
#     finished_sandwiches.append(sandwich)
    
# for sandwich in finished_sandwiches :
#     print(f"I made your {sandwich}")