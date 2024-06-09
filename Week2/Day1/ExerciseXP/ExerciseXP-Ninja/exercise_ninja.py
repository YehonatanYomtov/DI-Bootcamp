# 1) Use python to find out how many characters are in the following text, use a single line of code (beyond the establishment of your my_text variable).

my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

to_list = list(my_text)

print(len(to_list))

# --------------------

# 1) Keep asking the user to input the longest sentence they can without the character “A”.
# 2) Each time a user successfully sets a new longest sentence, print a congratulations message.

high_score = 0
current_score = 0

congrats_message = "Congratulations you have a new longest sentanse without the letter 'A' 🏆"
try_again_message = "Sorry you didn't beat your high score, try again 💪"

# made an infinite loop to constantly keep on asking the user for input. 
while 0 < 1 :
    user_input_sentence = input("Try to write the longest sentence without the character “A” ")
    user_sentence_to_list = list(user_input_sentence)

    for index, letter in enumerate(user_sentence_to_list) :
        if letter == "a" :
            current_score = index + 1
            break
        elif letter != "a" :
            current_score = index + 1

    if current_score > high_score :
        high_score = current_score
        print(congrats_message)
    else :
        current_score = 0
        print(try_again_message)





        
        

