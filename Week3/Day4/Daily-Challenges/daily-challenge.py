# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.

# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# 1) Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.

# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.

# Now, use the provided the_stranger.txt file and try using the class you created above.

# Bonus:
# Create a class called TextModification that inherits from Text.

# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.

# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)


from collections import Counter
import re
import os

# For bonus part
import nltk
from nltk.corpus import stopwords

dir_path = os.path.dirname(os.path.realpath(__file__))

class Text:
    def __init__(self, string: str) -> None:
        self.string = string
        
    def word_frequency(self, word: str) -> int:
        if " " in self.string:
            count_of_word = self.string.split().count(word)
            
            return count_of_word 
        else: 
            raise ValueError("The inputted string is only one word long thus not practical to count how many exist :(")
    
    def most_common_word(self) -> str:
        words = re.findall(r'\b\w+\b', self.string.lower())
        word_counts = Counter(words)
        
        return word_counts.most_common(1)[0][0]
    
    def get_unique_words(self) -> list:
        words = re.findall(r'\b\w+\b', self.string.lower())
        unique_words = list(set(words))
        
        return unique_words
    def without_punctuation(self):
        translation_table = str.maketrans('', '', self.string.punctuation)
        
        cleaned_text = self.string.translate(translation_table)
        
        return cleaned_text
    
    def without_stop_words(self):
        stop_words = set(stopwords.words('english'))
        words = self.string.split()
        
        filtered_words = [word for word in words if word.lower() not in stop_words]
        
        return ' '.join(filtered_words)
        
    def without_special_characters(self):
        pattern = r'[^a-zA-Z0-9\s]'
        
        cleaned_text = re.sub(pattern, '', self.string)
        
        return cleaned_text
    
    @classmethod
    def from_file(cls, file_location: str):
        with open(file_location, mode = 'r') as file:
            data = file.read()
            return cls(data).string


def main() -> None:
    text1 = Text("A good book would sometimes cost as much as a good house.")
    print(text1.word_frequency("as"))
    print(text1.most_common_word())
    print(text1.get_unique_words())
    print(text1.without_special_characters())

    text2 = Text.from_file(dir_path + '//the_stranger.txt')
    # print(text2)

if __name__ == "__main__":
    main()     