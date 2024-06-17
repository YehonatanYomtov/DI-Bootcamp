# Instructions
# In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques.
# It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

# For example, with a left shift of 3 –> D would be replaced by A,
# –> E would become B, and so on.

# The method is named after Julius Caesar, who used it in his private correspondence.

# Create a python program that encrypts and decrypts messages with ceasar cypher.
# The user enters the program, and then the program asks him if he wants to encrypt or decrypt, and then execute encryption/decryption on a given message and a given shift.

# Check out this tutorial

# Hint:

# for letter in text:
#     cypher_text += chr(ord(letter) + 3)

encrypt_or_decrypt_input = input("would you like to encrypt or decrypt? ")

encrypt = None

shift = 0

text = ''

result = ''

if encrypt_or_decrypt_input.lower() == 'encrypt' :
    text = input("Enter the text you would like to encrypt: ")
    encrypt = True
elif  encrypt_or_decrypt_input.lower() == 'decrypt' :
    text = input("Enter the text you would like to decrypt: ")
    encrypt = False

shift = int(input("What is the amount to shift by? (please enter a number): "))

if encrypt :
    for letter in text:
        result += chr(ord(letter) + shift)

        # If you want to maintain the spaces (same method for decrypting) -->
        # if letter == ' ' :
        #     result += ' '
        # else :
        #     result += chr(ord(letter) + 3)

if not encrypt :
    for letter in text:
        result += chr(ord(letter) - shift)

print(result)
