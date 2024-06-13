# Write a program which takes a string and a character as an input, and finds out the number of occurrences the character has in the string.

# String: Programming is cool!
# Character: o
# 3


# String: This is a great example
# Character: y
# 0



def check_amount_of_character(string, character):
    amount = 0
    for char in string:
        if char == character:
            amount += 1
    
    print(f"Character: {character}. Amount: {amount}")

check_amount_of_character("Programming is cool!", "o")
