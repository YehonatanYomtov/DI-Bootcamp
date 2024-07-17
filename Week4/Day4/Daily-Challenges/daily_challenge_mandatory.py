# # Instructions
# # 1) Using this REST Countries API, create the functionality which will write 10 random countries to your database.

# # 2)These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.

# import psycopg2
# import requests
# import random

# HOSTNAME = 'localhost'
# USERNAME = 'postgres'
# PASSWORD = 'Yehonatan8448'
# DATABASE = 'countries'
# PORT = '5432'

# connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)

# cursor = connection.cursor()

# def insert_country_to_menu(
#                         name: str,
#                         capital: str, 
#                         flag: str, 
#                         subregion: str, 
#                         population: int
#                         ) -> None:
#     try:
#         insert_query = "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)"

#         cursor.execute(insert_query, (name, capital, flag, subregion, population))
#         connection.commit()
#     except Exception as e:
#         print(f"Failed to INSERT country: {e}")

# def main():
#     try:
#         response = requests.get('https://restcountries.com/v3.1/all')
#         data = response.json() 
#         random_countries = random.sample(data, 10)

#         for country in random_countries:
            # name = country['name']['common']
            # capital = country['capital'][0]
            # flag = country['flag']
            # subregion = country['subregion']
            # population = country['population']

#             insert_country_to_menu(name, capital, flag, subregion, population)

#     except requests.exceptions.HTTPError as errh:
#         print(f"HTTP Error: {errh}")
#     except requests.exceptions.ConnectionError as errc:
#         print(f"Error Connecting: {errc}")
#     except requests.exceptions.Timeout as errt:
#         print(f"Timeout Error: {errt}")
#     except requests.exceptions.RequestException as err:
#         print(f"OOps: Something Else: {err}")

#     connection.close()

# if __name__ == '__main__':
#     main()


import psycopg2
import bcrypt

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'Yehonatan8448'
DATABASE = 'bookify_db'
PORT = '5432'

connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)

cursor = connection.cursor()

def new_seller_password_inputs():
    seller_password = input("""
Enter your new password: 
    >> """)

    re_entered_password = input("""
Re-enter your password: 
    >> """)
    return seller_password, re_entered_password

def hash_password(password):
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt())

def check_password(hashed_password, input_password):
    return bcrypt.checkpw(input_password.encode(), hashed_password)


def user_auth():
    print("""
+--------------+
| Hi there! 👋 |  
+--------------+""")
    
    select_query = "SELECT * FROM seller"
    cursor.execute(select_query)
    connection.commit()
    
    rows = cursor.fetchall()

    
    
    if not rows:
        seller_first_name = input("""
Seams like this is your first time using this program : 

What is your first name? 
    >> """).lower()
        
        seller_last_name = input("""
What is your last name?
    >> """).lower()
        
        seller_password, re_entered_password = new_seller_password_inputs()
        
        if re_entered_password != seller_password:
            print("""
+-------------------------------------------------------------+
|  ⚠️ Your re-entered password does not match the password! ⚠️  |
+-------------------------------------------------------------+  
""")
            
            print(f"""
Lets give it another shot {seller_first_name} {seller_last_name} 😉""")
            new_seller_password_inputs()
            
        else:
            # Hashing the password:
            hashed_password = hash_password(seller_password)
            
            try:
                insert_query = "INSERT INTO seller (seller_first_name, seller_last_name, seller_password) VALUES (%s, %s, %s)"
                cursor.execute(insert_query, (seller_first_name, seller_last_name, hashed_password))
                connection.commit()
                
                print("""
+------------+
|  Success!  |
+------------+  
                """)
            except Exception as e:
                print(f"Failed to INSERT user name or password: {e}")

    else:
        _,seller_first_name, seller_last_name, seller_password =  rows[0]
            
        print(f"Welcome back {seller_first_name} {seller_last_name}!")


# Welcome back {seller_first_name} {seller_last_name}!

#  Select an option:
#     (L) Log in
#     (C) Change existing password
#     (X) Exit
#         >> """).capitalize()

#         if seller_choice == 'L':
#             seller_password_input = input("""
# # Your password: 
# #     >> """).encode()
#             input_password, _ = new_seller_password_inputs()
#             if check_password(hashed_password, input_password):
#                 print("Password is correct! You logged in successfully.")
#             else:
#                 print("Password is incorrect!")


#         elif seller_choice == 'C':
#             ...
#         elif seller_choice == 'X':
#             pass

# except Exception as e:
#     print(f"Failed to SELECT seller: {e}")
    
user_auth()
