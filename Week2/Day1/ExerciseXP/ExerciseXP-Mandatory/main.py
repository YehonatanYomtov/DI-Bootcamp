# ---- Exercise-1 ----
# Print the following output in one line of code:

# print("Hello World! " *4)

# ---- Exercise-2 ----
# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

# math = (99^3)*8 
# print(math)

# ---- Exercise-3 ----
# Predict the output of the following code snippets:

# print( 5 < 3 ) --> false
# print( 3 == 3 ) --> true
# print( 3 == "3" ) --> false
# print( "3" > 3 ) --> typeError 
# print( "Hello" == "hello" ) --> false

# ---- Exercise-4 ----
# 1) Create a variable called computer_brand which value is the brand name of your computer.
# 2) Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

# computer_brand = "Apple M1"
# print(f"I have a {computer_brand} computer")

# ---- Exercise-5 ----
# 1) Create a variable called name, and set it’s value to your name.
# 2) Create a variable called age, and set it’s value to your age.
# 3) Create a variable called shoe_size, and set it’s value to your shoe size.
# 4)  Create a variable called info and set it’s value to an interesting sentence about yourself. The   sentence must contain all the variables created in parts 1, 2 and 3.
# 5) Have your code print the info message.
# 6) Run your code

# name = "Yehonatan"
# age = 26
# shoe_size = 42
# info = f"My name is {name}, and I am {age} years old. My shoe size is {shoe_size}. Oh yeahhhh!"
# print(info)

# ---- Exercise-6 ----
# 1) Create two variables, a and b.
# 2) Each variable value should be a number.
# 3) If a is bigger then b, have your code print Hello World.

# a = 10
# b = 5

# if a > b : print("Hello World")

# ---- Exercise-7 ----
# Write code that asks the user for a number and determines whether this number is odd or even.

# user_input = input("Please enter a number: ")

# number = int(user_input)

# if number % 2 == 0:
#    print(f"{number} is even.")
# else:
#    print(f"{number} is odd.")

# ---- Exercise-8 ----
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

# my_name = "Yehonatan"

# user_input = input("What is your name? ")

# if user_input == my_name :
#    print(f"Holy moly {number} our name is the same... dumb name ain't it XD")
# else:
#    print(f"Im lucky your name isn't what my mama gave me :p")

# ---- Exercise-9 ----  
# 1) Write code that will ask the user for their height in centimeters.
# 2) If they are over 145cm print a message that states they are tall enough to ride.
# 3) If they are not tall enough print a message that says they need to grow some more to ride.

user_height = input("What is your height in centimeters? ")

number = int(user_height)

if user_height > 145 :
   print("You are old enough to ride :)")
else: 
   print("You need to grow some more to ride :(")

