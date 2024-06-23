# Exercise 1 : Cars
# Instructions
# 1) Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
# 2) Convert it into a list using Python (don’t do it by hand!).
# 3) Print out a message saying how many manufacturers/companies are in the list.
# 4) Print the list of manufacturers in reverse/descending order (Z-A).
# 5) Using loops or list comprehension:
#    - Find out how many manufacturers’ names have the letter ‘o’ in them.
#    - Find out how many manufacturers’ names do not have the letter ‘i’ in them.

# 6) Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
#   - Remove these programmatically. (Hint: you can use set to help you).
#   - Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.

# 7) Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

to_list = string.split()

to_list.reverse()
# print(len(to_list))

# print(to_list)
# Or if you don't want to mutate the original list: -> 
# print(to_list[::-1])

how_many_with_letter_o = [manufacturer for manufacturer in to_list if 'o' in manufacturer]
how_many_without_letter_i = [manufacturer for manufacturer in to_list if 'i' not in manufacturer]
# print(f"==>> result: {how_many_with_letter_o}")
# print(f"==>> result: {how_many_without_letter_i}")

#  Bonus:
manufacturers = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

without_duplicates = set(manufacturers)
# print(f"==>> Result: {', '.join(without_duplicates)}")
# print(f"==>> how many companies left: {len(without_duplicates)}")

#  Bonus #2:
for company in manufacturers:
    print(f"{company[::-1]}")
