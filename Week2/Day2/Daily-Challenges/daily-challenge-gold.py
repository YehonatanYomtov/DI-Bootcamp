# 1) Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
# 2) Display a little cake as seen below:
#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~

# 3) The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.

# ✅ Bonus : If they were born on a leap year, display two cakes !



import datetime

current_year = datetime.date.today().year

user_input = input("What date is your birthday (e.g. DD/MM/YYYY): ")

user_input_year = int(user_input.split("/")[-1])

current_age = current_year - user_input_year

amount_of_candles = str(current_age)[-1]

leap_year = user_input_year % 4 == 0

cake = f"""
       ___{'__iii__' if int(amount_of_candles) == 0 else 'i' * int(amount_of_candles)}___
       |:H:a:p:p:y:|
     __|{'_' * 11}|__
    |{'^' * 17}|
    |:B:i:r:t:h:d:a:y:|
    |{' ' * 17}|
    {'~' * 19}
"""

print(cake * 2 if leap_year else cake)