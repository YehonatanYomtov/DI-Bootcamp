# Challenge 1
# 1) Ask a user for a word
# 2) Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
#  - Make sure the letters are the keys.
#  - Make sure the letters are strings.
#  - Make sure the indexes are stored in a list and those lists are values.

# Examples

# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }

# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}

# user_input_list = list(input("Enter a word: "))

# dictionary = {}

# for i, letter in enumerate(user_input_list) :
#     if isinstance(letter, str) :
#         if letter in dictionary:
#             dictionary[letter].append(i)
#         else :
#             dictionary[letter] = [i]

# print(dictionary)

# --------------------

# Challenge 2
# 1) Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# 2) Sort the list in alphabetical order.
# 3) Return “Nothing” if you can’t afford anything from the store.

# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

# Examples
# The key is the product, the value is the price

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"

# ➞ ["Bread", "Fertilizer", "Water"]

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100" 

# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# # In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# # instead you can by the Spoon that is $2

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1" 

# ➞ "Nothing"

# 1) Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# 2) Sort the list in alphabetical order.
# 3) Return “Nothing” if you can’t afford anything from the store.

# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300" 

result = []

for k, v in items_purchase.items() :
   amount = ''

   # In case the wallet also has has a number with a ',' in it
   if ',' in wallet :
      wallet = wallet.replace(',', '').replace('$', '')
   else :
      wallet = wallet.replace('$', '')

   if ',' in v :
      amount = v.replace(',', '').replace('$', '')
   else :
      amount = v.replace('$', '')
        
   if int(amount) < int(wallet) :
      result.append(k)
   else :
      pass

result.sort(key=lambda x: x[1], reverse=True)

# If there isn't enough money in the wallet for any of the items:
if len(result) == 0 :
   result = 'Nothing'

print(result)