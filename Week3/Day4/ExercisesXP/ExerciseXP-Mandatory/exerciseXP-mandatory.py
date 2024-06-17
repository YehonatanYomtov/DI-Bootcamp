# 🌟 Exercise 1 : What Are You Learning ?
# Instructions
# 1) Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# 2) Call the function, and make sure the message displays correctly.

# def display_message():
#    print('I am learning Python now')

# display_message()

# --------------------

# 🌟 Exercise 2: What’s Your Favorite Book ?
# Instructions
# 1) Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

# def favorite_book(title):
#    print(f"One of my favorite books {title}")
   
# favorite_book("Harry Potter")

# --------------------

# 🌟 Exercise 3 : Some Geography
# Instructions
# 1) Write a function called describe_city() that accepts the name of a city and its country as parameters.
# 2) The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# 3) Give the country parameter a default value.
# 4) Call your function.

# def describe_city(city = "Bet Shemesh", country = "Israel"):
#    print(f"{city} is in {country}")
   
# describe_city()
# describe_city('Melbourne', 'Australia')

# --------------------

# 🌟 Exercise 4 : Random
# Instructions
# 1) Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# 2) Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

# import random

# def random_number_picker(num):
#    random_num = random.randint(1, 100)
   
#    if num == random_num:
#       print(f"Success 🎉. Random number: {random_num}, Your number: {num}")
#    else:
#       print(f"Fail 🙁. Random number: {random_num}, Your number: {num}")

# random_number_picker(2)

# --------------------

# 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# 1) Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# 2) The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# 3) Call the function make_shirt().
# 4) Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# 5) Call the function, in order to make a large shirt with the default message
# 6) Make medium shirt with the default message
# 7) Make a shirt of any size with a different message.

# Bonus: ✅ Call the function make_shirt() using keyword arguments.

# def make_shirt(size = "large", message = "I love Python"):
#    print(f"The size of the shirt is {size} and the text is {message}")

# make_shirt()
# make_shirt("medium")
# make_shirt("medium", "Yehonatan")

# make_shirt(size = "small", message = "This is the bonus")

# --------------------

# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# 1) Create a function called show_magicians(), which prints the name of each magician in the list.
# 2) Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# 3) Call the function make_great().
# 4) Call the function show_magicians() to see that the list has actually been modified.

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(list):
#    for i in list:
#       print(i)
      
# show_magicians(magician_names)

# def make_great(list):
#    for i, name in enumerate(list):
#       magician_names[i] += " the Great"

# make_great(magician_names)

# print(magician_names)

# --------------------

# 🌟 Exercise 7 : Temperature Advice
# Instructions
# 1) Create a function called get_random_temp().
#  - This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
#  - Test your function to make sure it generates expected results.

# 2) Create a function called main().
#  - Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
#  - Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# 3) Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
#  - below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
#  - between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
#  - between 16 and 23
#  - between 24 and 32
#  - between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# ✅ Bonus: Give the temperature as a floating-point number instead of an integer.
# ✅ Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

# import random
# import calendar

# def get_random_temp(month):
#    winter = float(random.randint(-10, 16))
#    fall = float(random.randint(16, 23))
#    spring = float(random.randint(23, 32))
#    summer = float(random.randint(24, 32))
   
#    months = list(calendar.month_name)[1:]
#    # 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
#    if month == "March" or month == "April" or month == "May":
#       return spring
#    elif month == "June" or month == "July" or month == "August":
#       return summer
#    elif month == "September" or month == "October" or month == "November":
#       return fall
#    elif month == "December" or month == "January" or month == "February":
#       return winter

# def main():
#    season = input("Please enter a month (i.e. February November)")
   
#    temp = get_random_temp(season)
   
#    print(temp)
   
#    if temp < 0 :
#       print("Brrr, that's freezing! Wear some extra layers today")
#    elif temp in range(0, 16) :
#       print("Quite chilly! Don't forget your coat")
#    elif temp in range(16, 23) :
#       print("Quite chilly! Don't forget your coat")
#    elif temp in range(23, 32) :
#       print("its nice weather!")
#    elif temp in range(32, 40) :
#       print("its hot weather!")

# main()

# --------------------

# 🌟 Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.

data = [
   {
      "question": "What is Baby Yoda's real name?",
      "answer": "Grogu"
   },
   {
      "question": "Where did Obi-Wan take Luke after his birth?",
      "answer": "Tatooine"
   },
   {
      "question": "What year did the first Star Wars movie come out?",
      "answer": "1977"
   },
   {
      "question": "Who built C-3PO?",
      "answer": "Anakin Skywalker"
   },
   {
      "question": "Anakin Skywalker grew up to be who?",
      "answer": "Darth Vader"
   },
   {
      "question": "What species is Chewbacca?",
      "answer": "Wookiee"
   }
]

correct_answers = []
wrong_answers = []

def test():
   for el in data:
      user_answer = input(el["question"]).lower()
      
      if user_answer == el["answer"].lower():
         print("That is correct!")
         correct_answers.append(el) 
      else: 
         print("Sorry wrong answer")
         wrong_answers.append(el)

   def informer():
      print("These are your correct answers: ")
      
      for el in correct_answers:
         print(f"Q: {el['question']} A: {el['answer']}")
      
      print("These are your wrong answers: ")
      
      for el in wrong_answers:
         print(f"Q: {el['question']} A: {el['answer']}")
         
   informer()  
   
   if len(wrong_answers) > 3:
      play_again_input = input("Do you want to try again? ").lower()
      
      if play_again_input == "yes":
         test()
      else:
         pass
      
test()
