# Instructions
# Part 1 : Quizz :
# Answer the following questions

# What is a class?
    # --> A class is a blue print of an object, where we can encapsulate its code and re use it's instances all over our code. It defines a set of attributes and methods that the created objects (instances) will have.

# What is an instance?
    # --> An instance is an object which has all of it's parent class's attributes and methods (if we use the super() method or inherit the parent class) and can be reusable like a function with diff inputs every time. It has its own scope, which means that its methods and attributes are its won, and have no connection to other instances.

# What is encapsulation?
    # --> Ir's when you create a new scope (local scope), where the data within incloses itself from other local scopes. in OOP it mean that one instances attributes and methods wont be "touched" by other instances attributes and methods, which insures consistency and protectiveness from bugs, and make things also more readable.

# What is abstraction?
    # --> Abstraction in OOP is the concept of hiding the complex implementation details of a system and exposing only the essential features or functionalities to the users. So that they can just call methods (that are named like functionalities) and just apply them rather then them needing to fiddle in the complex code. And it also enhances code readability and maintenance by the fact that we reduced the complexity.

# What is inheritance?
    # --> In OOP it is when a child (instance object) that inherits it's parents (the class 'blueprint) attributes and methods. And then if that instance wants it can also modify the parents methods etc.
        
# What is multiple inheritance?
    # --> Multiple inheritance in OOP is when a class inherits attributes and methods from more than one parent class. meaning: a child class can derive features from multiple parent classes.

# What is polymorphism?
    # --> It's the ability of different objects to respond to the same method call in different ways. It allows methods to be defined in multiple classes with the same name but different implementations. So it can mutate the parents methods.

# What is method resolution order or MRO?
    # --> It refers to the sequence in which a programming language resolves method calls to ensure correct inheritance behavior. So in python as we know python executes code from top to bottom, and then from left to right, when it sees a call of a method in an instance it searches the instance for that method and if it doesn't find the method there it will go to the parent class, in the order of the MRO. 

# --------------------

# # Part 2: Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random

class Card:
    def __init__(self, suit: str = "", value: str = "") -> None:
        self.suit = suit
        self.value = value
        
    def __repr__(self) -> str:
        return f"{self.suit} {self.value}"
        
class Deck:
    def __init__(self) -> None:
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.deck = []
        
        for suit in self.suits:
            for value in self.value:
                self.deck.append(Card(suit, value))
    
    def shuffle(self) -> None:
        if len(self.deck) == 52:
            random.shuffle(self.deck)
    
    def deal(self):
        random_card = random.choice(self.deck)
        self.deck.remove(random_card)
        return random_card
    
    def __repr__(self):
        return f"{self.deck}"
        
deck = Deck()
print(deck)
print(deck.shuffle())
print(deck)
print("Dealt Card ---->", deck.deal())
print(deck)