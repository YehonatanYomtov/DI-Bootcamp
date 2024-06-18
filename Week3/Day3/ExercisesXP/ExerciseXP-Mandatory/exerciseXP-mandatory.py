# # 🌟 Exercise 1: Currencies
# # Instructions
# # class Currency:
# #     def __init__(self, currency, amount):
# #         self.currency = currency
# #         self.amount = amount

# #     #Your code starts HERE

# # Using the code above, implement the relevant methods and dunder methods which will output the results below.
# # Hint : When adding 2 currencies which don’t share the same label you should raise an error.

# # >>> c1 = Currency('dollar', 5)
# # >>> c2 = Currency('dollar', 10)
# # >>> c3 = Currency('shekel', 1)
# # >>> c4 = Currency('shekel', 10)

# # >>> str(c1)
# # '5 dollars'

# # >>> int(c1)
# # 5

# # >>> repr(c1)
# # '5 dollars'

# # >>> c1 + 5
# # 10

# # >>> c1 + c2
# # 15

# # >>> c1 
# # 5 dollars

# # >>> c1 += 5
# # >>> c1
# # 10 dollars

# # >>> c1 += c2
# # >>> c1
# # 20 dollars

# # >>> c1 + c3
# # TypeError: Cannot add between Currency type <dollar> and <shekel>

from typing import Union

class Currency:
    def __init__(self, currency, amount) -> None:
        self.currency = currency
        self.amount = amount

    # Takes the instance of the class and turns it into a readable string (equivalent to the str() method)
    def __str__(self) -> str:
        return f"{self.amount} {self.currency}"

    # equivalent to the int() method
    def __int__(self) -> int:
        return self.amount

    # Same output as __str__, although __repr__ is to display the data to a developer, while __str__ is to display the instance of the class to the user. 
    def __repr__(self) -> str:
        return f"{self.amount} {self.currency}"

    # equivalent to + operator
    def __add__(self, other: Union[int, "Currency"]) -> int:
        if isinstance(other, Currency):
            if self.currency == other.currency:
                return self.amount + other.amount
            else:
                raise ValueError("The currency's are not the same, cant add on to the other.")
        elif isinstance(other, int):
            return self.amount + other
        else:
            raise TypeError("Unsupported type for addition.")

    # equivalent to the += operator
    def __iadd__(self, other:  Union[int, "Currency"]) -> "Currency":
        if isinstance(other, Currency):
            if self.currency == other.currency:
                self.amount += other.amount
            else:
                raise ValueError("Currencies are not the same, cannot add.")
        elif isinstance(other, int):
            self.amount += other
        else:
            raise TypeError("Unsupported type for in-place addition.")
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1)
print(int(c1))
print(repr(c1))

print(c1 + 5)
print(c1 + c2)

print(c1)

c1 += 5
print(c1)
c1 += c2
print(c1)
c1 + c3
print(c1)

# --------------------

# # 🌟 Exercise 2: Import
# # Instructions
# # In a file named func.py create a function that adds 2 number, and prints the result
# # In a file namedexercise_one.py import and the function
# # Hint: You can use the the following syntaxes:

# # import module_name 

# # OR 

# # from module_name import function_name 

# # OR 

# # from module_name import function_name as fn 

# # OR

# # import module_name as mn

# from func import add_nums

# add_nums(2, 3)

# --------------------

# # 🌟 Exercise 3: String Module
# # Instructions
# # Generate random String of length 5
# # Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# # Hint: use the string module

# import string
# import random

# def random_word_generator(length):
#     my_string = string.ascii_lowercase

#     random_chars = ''.join(random.choices(my_string, k = length))
    
#     return random_chars
    
# print(random_word_generator(5))

# --------------------

# # 🌟 Exercise 4 : Current Date
# # Instructions
# # Create a function that displays the current date.
# # Hint : Use the datetime module.

# import datetime

# def display_current_date():
#     return datetime.date.today()

# print(display_current_date())

# --------------------

# # Exercise 5 : Amount Of Time Left Until January 1st
# # Instructions
# # Create a function that displays the amount of time left from now until January 1st.
# # (Example: the 1st of January is in 10 days and 10:34:01hours).

# import datetime

# def time_left():
#     current_date = datetime.datetime.today()
#     target_date = datetime.datetime(current_date.year + 1, 1, 1)
    
#     time_left = target_date - current_date
#     days_left, hours_and_min_left = str(time_left).split(', ')
    
#     return f"The 1st of January is in {days_left} and {hours_and_min_left[: - 7]} hours"

# print(time_left())

# --------------------

# # Exercise 6 : Birthday And Minutes
# # Instructions
# # Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

# import datetime

# def life_in_minutes(day, month, year):
#     current_date = datetime.datetime.today()
#     day_of_birth = datetime.datetime(year, month, day)
    
#     amount_of_years = current_date - day_of_birth
#     total_seconds = amount_of_years.total_seconds()
    
#     amount_of_years_in_minutes = int(total_seconds // 60)
    
#     return amount_of_years_in_minutes
    
# print(life_in_minutes(16, 6, 1997))

# --------------------

# # Exercise 7 : Faker Module
# # Instructions
# # 1) Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# # 2) Create an empty list called users. Tip: It should be a list of dictionaries.
# # 3) Create a function that adds new dictionaries to the users list. Each user has the following keys: name, address, language_code. Use faker to populate them with fake data.

# from faker import Faker
# fake_generator = Faker()

# # print(f"==>> fake_generator.name(): {fake_generator.name()}")

# users = []

# def add_fake_users(amount_to_add):
#     for _ in range(0, amount_to_add):
#         users.append(
#             {   
#                 "name": fake_generator.name(),
#                 "address": fake_generator.address(),
#                 "language_code": fake_generator.language_code()
#             }
#         )
        
# add_fake_users(4)
# print(users)