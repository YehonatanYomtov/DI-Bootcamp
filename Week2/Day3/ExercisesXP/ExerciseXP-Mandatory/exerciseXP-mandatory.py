# 🌟 Exercise 1 : Convert Lists Into Dictionaries
# Instructions
# 1) Convert the two following lists, into dictionaries.
#  Hint: Use the zip method
#  keys = ['Ten', 'Twenty', 'Thirty']
#  values = [10, 20, 30]
# Expected output:
#  {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# lists_to_dictonary = dict(zip(keys, values))

# print(lists_to_dictonary)

# --------------------


# 🌟 Exercise 2 : Cinemax #2
# Instructions
# 1) A movie theater charges different ticket prices depending on a person’s age.
#  - if a person is under the age of 3, the ticket is free.
#  - if they are between 3 and 12, the ticket is $10.
#  - if they are over the age of 12, the ticket is $15.
# 2) Given the following object:
#   family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# 3) How much does each family member have to pay ?
# 4) Print out the family’s total cost for the movies.
# 5) ✅ Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).


# dict_of_family = {}

# total_cost = 0

# amount_of_people_input = input("Please enter the number of people that are participating in tonights movie: ")

# for i in range(0, int(amount_of_people_input)) :
#     name_and_age_input = input("Please enter the name space and then the age (e.g. Alex 22): ")
    
#     list_of_name = name_and_age_input.split()
    
#     dict_of_family[list_of_name[0]] = int(list_of_name[1])

# for name, age in dict_of_family.items() :
#     if age < 3 :
#         print(f"Entry for {name} is free!")
#     elif age >= 3 and age < 12 :
#         total_cost += 10
#         print(f"Entry for {name} is 10$")
#     elif age > 12 :
#         total_cost += 15
#         print(f"Entry for {name} is 15$")

# print(f"The total cost for this family is: {total_cost}$")

# --------------------

# 🌟 Exercise 3: Zara
# Instructions
# 1) Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green


# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
# 3. Change the number of stores to 2.
# 4. Print a sentence that explains who Zaras clients are.
# 5. Add a key called country_creation with a value of Spain.
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# 7. Delete the information about the date of creation.
# 8. Print the last international competitor.
# 9. Print the major clothes colors in the US.
# 10. Print the amount of key value pairs (ie. length of the dictionary).
# 11. Print the keys of the dictionary.
# 12. Create another dictionary called more_on_zara with the following details:

# creation_date: 1975 
# number_stores: 10 000

# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# 14. Print the value of the key number_stores. What just happened ?

# brand = {
#    "name": "Zara",
#    "creation_date": 1975,
#    "creator_name": "Amancio Ortega Gaona",
#    "type_of_clothes": ["men", "women", "children", "home"],
#    "international_competitors": ["Gap", "H&M", "Benetton"],
#    "number_stores": 7000,
#    "major_color" : {
#       "France": "blue", 
#       "Spain": "red", 
#       "US": [
#          "pink", 
#          "green"
#       ]
#    }
# }

# more_on_zara = { "creation_date": 1975 , "number_stores": "10 000"}

# brand["number_stores"] = 2

# print(f"These are our clients: {', '.join(brand['type_of_clothes'])}")

# brand["country_creation"] = "Spain"

# if "international_competitors" in brand :
#    brand["international_competitors"].append("Desigual")
   
# del brand["creation_date"]

# print(brand["international_competitors"][-1])

# brand.update(more_on_zara) # or short hand --> brand | more_on_zara

# print(brand["number_stores"])

# ANSWER for Q 24 --> The update method updates the dictionary with elements from another dictionary. And if they have the same key in both dictionaries, then the second value will overwrite the previous value, which is why it's not 2 anymore.


# Exercise 4 : Disney Characters
# Instructions
# Use this list :

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# 1) Analyse these results :

# #1/

# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/ 

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


# 2) Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# 3) Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# 4) Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# 5) Only recreate the 1st result for:
#  The characters, which names contain the letter “i”.
#  The characters, which names start with the letter “m” or “p”.

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# sorted_users = sorted(users)

# disney_users_A = {}
# disney_users_B = {}
# disney_users_C = {}

# for i, name in enumerate(users) :
#    if "i" in name or name.lower().startswith(("m", "p")) :
#       disney_users_A[name] = i
   
# for i, name in enumerate(users) :
#    disney_users_B[i] = name
   
# for i, name in enumerate(sorted_users) :
#    disney_users_C[name] = i

# print(disney_users_A)
# print(disney_users_B)
# print(disney_users_C)