# ---- Exercise-1 ----  
# Print the following output in one line of code:

# for i in range(4) :
#     print("Hello World")

# for i in range(4) :
#     print("I love Python")

# ---- Exercise-2 ----  
# 1) Ask the user to input a month (1 to 12).
# 2) Display the season of the month received :
#    - Spring runs from March (3) to May (5)
#    - Summer runs from June (6) to August (8)
#    - Autumn runs from September (9) to November (11)
#    - Winter runs from December (12) to February (2)

user_input = input("Please enter a month (1 - 12)")

to_number = int(user_input)

if to_number >= 3 and to_number <= 5 : 
   print("Its Spring")
elif to_number >= 6 and to_number <= 8 :
   print("Its Summer")
elif to_number >= 9 and to_number <= 11 :
   print("Its Autumn")
elif to_number == 12 or to_number <= 2 :
   print("Its Winter")
