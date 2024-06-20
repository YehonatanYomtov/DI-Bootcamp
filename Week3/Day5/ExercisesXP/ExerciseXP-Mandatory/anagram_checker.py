import os 

dir_path = os.path.dirname(os.path.realpath(__file__))

class AnagramChecker:
    def __init__(self) -> None:
        self.words = self._load_word_list()
        self.word_list = self.words.split()
        
    def __str__(self) -> str:
        return f"{self.word_list}"
    
    def _load_word_list(self) -> str:
        with open( dir_path + "//sowpods.txt", mode = 'r') as file:
            data = file.read()
            return data.lower()
        
    def is_valid_word(self, word: str) -> bool:
        if word in self.word_list:
            return True
        else:
            return False

    def get_anagrams(self, word: str) -> list:
        anagrams = [w for w in self.word_list if sorted(w) == sorted(word.lower())]     

        return anagrams



