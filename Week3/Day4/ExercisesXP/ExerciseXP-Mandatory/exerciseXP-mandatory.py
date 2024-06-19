# # 🌟 Exercise 1 – Random Sentence Generator
# # Instructions
# # Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# # Hint : The generated sentences do not have to make sense.

# # 1) Download this word list

# # 2) Save it in your development directory.

# # 3) Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

# # 4) Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# #   - use the words list to get your random words.
# #   - the amount of words should be the value of the length parameter.

# # 5) Take the random words and create a sentence (using a python method), the sentence should be lower case.

# # 6) Create a function called main which will:

# #   - Print a message explaining what the program does.
# #   - Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# #       - If the user inputs incorrect data, print an error message and end the program.
# #       - If the user inputs correct data, run your code.

# import random

# def get_words_from_file() -> list:
#     with open('random_words.txt') as file:
#         content = file.read()
#         words = content.split()
#         return words
    
# def get_random_sentence(length: int) -> str:
#     random_words = random.sample(get_words_from_file(), length)
#     sentence = ' '.join(random_words).lower()
#     return sentence

# def main() -> None:
#     print("This program generates for a random amount of words, all you have to do is choose an integer between 2 and 20 and pass it as a value to the 'get_random_sentence()' function.")
    
#     user_input = int(input("Enter integer between 2 and 20: "))
    
#     if isinstance(user_input, int):
#         print(get_random_sentence(user_input))
#     else:
#         raise TypeError("Your input needs to be an integer")
    
# if __name__ == "__main__":
#     main()

# --------------------

# 🌟 Exercise 2: Working With JSON
# Instructions

# import json
# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""

# 1) Access the nested “salary” key from the JSON-string above.
# 2) Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# 3) Save the dictionary as JSON to a file.

import json

sampleJson = """{ 
    "company":{ 
        "employee":{ 
            "name":"emma",
            "payable":{ 
                "salary":7000,
                "bonus":800
            }
        }
    }
}"""


data = json.loads(sampleJson)

salary = data['company']['employee']['payable']['salary']

data['company']['employee']['birth_date'] = "12/03/1999"
# print(f"==>> my_family: {salary}")

output_file_path = 'modified_data.json'

with open(output_file_path, 'w') as file:
    json.dump(data, file, indent = 4)


