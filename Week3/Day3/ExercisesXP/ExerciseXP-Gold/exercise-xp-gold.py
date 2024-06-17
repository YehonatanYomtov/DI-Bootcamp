# Exercise 1: Birthday Look-Up
# 1) Create a variable called birthdays. Its value should be a dictionary.
# 2) Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# 3) Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
#   - Ask the user to give you a person’s name and store the answer in a variable.
#   - Get the birthday of the name provided by the user.
#   - Print out the birthday with a nicely-formatted message.

# Exercise 2: Birthdays Advanced
# Instructions
# 1) Before asking the user to input a person’s name print out all of the names in the dictionary.
# 2) If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)

# Exercise 3: Add Your Own Birthday
# Instructions
# 1) Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday:
#   - Ask the user for a person’s name – store it in a variable.
#   - Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
#   - Now add this new data into your dictionary.
# 2) Make sure that if the user types any name that exists in the dictionary – including the name that he entered himself – the corresponding birthday is found and displayed.

# birthdays = {"John": "1980/12/04", "Mike": "1990/11/03", "Alex": "1985/08/07", "James": "2000/12/13", "Samuel": "2004/03/10",}

# name_exists = False

# birthday_name = input("Enter a name: ")
# birthday_input = input("Enter a birthday (i.e. YYYY/MM/DD): ")

# birthdays[birthday_name] = birthday_input

# print("Here is the list of dates and birthdays:")

# for name, birthday in birthdays.items():
#    print(f"Name: {name}'s Birthday: {birthday}") 

# print("Welcome!!! You can look up the birthdays of the people in the list!")

# user_name_input = input("Enter a name: ").lower()

# for name, birthday in birthdays.items():
#    if user_name_input == name.lower():
#       name_exists = True
#       print(f"Here is the date of {user_name_input}'s birthday: {birthday}") 
#       break
#    else:
#       name_exists = False

# if not name_exists:
#    print(f"Sorry, the name {user_name_input} doesn't exist in the list")


# ---------------------

# Exercise 4: Fruit Shop
# Instructions
# items = {
#     "banana": 4,
#     "apple": 2,
#     "orange": 1.5,
#     "pear": 3
# }

# 1) Using the dictionary above, each key-value pair represents an item and its price - print all the items and their prices in a sentence.
# items = {
#     "banana": 4,
#     "apple": 2,
#     "orange": 1.5,
#     "pear": 3
# }

# to_sentence = ''

# for k, v in items.items():
#     to_sentence += f"Item: {k} Cost: {v} | "

# print(to_sentence)


# 2) Using the dictionary below, each value are dictionaries containing both the price and the amount of items in stock -
# write some code to calculate how much it would cost to buy everything in stock.
# items = {
#     "banana": {"price": 4 , "stock":10},
#     "apple": {"price": 2, "stock":5},
#     "orange": {"price": 1.5 , "stock":24},
#     "pear": {"price": 3 , "stock":1}
# }

items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

total_price = 0

for k, v in items.items(): 
    price = v["price"]
    stock = v["stock"]

    total_price += stock * price

print(f"This is what it would cost you to buy all the merchandise: {total_price}")
