# Here I am using Microsoft Translator (Alternative) since the google translate was causing issues:

from translate import Translator

translator = Translator(from_lang='fr', to_lang='en')

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

translations = {}
for word in french_words:
    translation = translator.translate(word)
    translations[word] = translation

print(translations)