# Instructions
# The computer choose a random word and mark stars for each letter of each word.
# Then the player will guess a letter.
# If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
# If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
# The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
# The player can’t guess the same letter twice.


# Starter Code
# Here is a piece of code that will give you a random word.

    # import random

    # wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
    # word = random.choice(wordslist) 

    # ### YOUR CODE STARTS FROM HERE ###

import random

words_list = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']

body_parts = ['🤕', '👕', 'Left 💪', 'Right 💪', 'Left 🦵', 'Right 🦵']

gallows = []

word = random.choice(words_list)
word_list = list(word)

stars = ["*" for _ in range(len(word))]
print(' '.join(stars))

guessed_letters = set()

while len(body_parts) != 0 and "*" in stars:
    user_guess = input("Guess a letter: ").lower()
    
    if user_guess in guessed_letters:
        print("You've already guessed that letter. Try again.")
        continue

    guessed_letters.add(user_guess)

    if user_guess in word_list and user_guess not in stars:
        for i, char in enumerate(word_list):
            if word_list[i] == user_guess:
                stars[i] = word_list[i]
    elif user_guess not in word_list and user_guess not in stars:
        body_part = body_parts.pop(0)
        gallows.append(body_part)
        
    print(' '.join(stars))
    print("The Gallows ⚰️ -> ", ' | '.join(gallows))

if "*" not in stars:
    print("Congratulations! You guessed correctly. You WIN! 🏆")
else:
    print("Sorry, you ran out of guesses. Game Over 😔")

