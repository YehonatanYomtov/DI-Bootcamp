from exerciseXP_mandatory import Dog

# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# 1) Create a new python file and import your Dog class from the previous exercise.
# 2) In the new python file, create a class named PetDog that inherits from Dog.
# 3) Add an attribute called trained to the __init__ method, this attribute is a boolean and th/webhpe value should be False by default.
# 4) Add the following methods:
#   - train: prints the output of bark and switches the trained boolean to True
#   - play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.
#   - do_a_trick: If the dog is trained the method should print one of the following sentences at random:
#       - “dog_name does a barrel roll”.
#       - “dog_name stands on his back legs”.
#       - “dog_name shakes your hand”.
#       - “dog_name plays dead”.

from typing import Union

class Dog:
    def __init__(self, name : str, age : int, weight : int) -> None:
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self) -> str:
        return f"{self.name} is barking"
    
    def run_speed(self) -> Union[int, float]:
        return self.weight / self.age * 10
    
    def fight(self, other_dog : 'Dog') -> str:
        if other_dog.run_speed() * other_dog.weight > self.run_speed() * self.weight:
            return f"{other_dog.name} won the fight!"
        else:
            return f"{self.name} won the fight!"

alpha = Dog("Alpah", 8, 50)
spots = Dog("Spots", 6, 70)
snow = Dog("Snow", 5, 40)

print(alpha.bark())
print(alpha.run_speed())
print(alpha.fight(spots))

import random

class PetDog(Dog):
    def __init__(self, name: str, age: int, weight: int, trained: bool = False) -> None:
        super().__init__(name, age, weight)

        self.tranied = trained 

    def train(self) -> None:
        print(self.bark())
        self.trained = True
    
    def play(*args: Dog) -> None:
        dog_names = ', '.join([dog.name for dog in args])

        print(f"{dog_names} all play together")

    def do_a_trick(self):
        tricks = [f"{self.name} does a barrel roll", f"{self.name} stands on his back legs", f"{self.name} shakes your hand", f"{self.name} plays dead"]

        random_trick = random.choice(tricks)

        print(random_trick)

mini = PetDog("Mini", 9, 30)

print(mini.play(spots, snow))

mini.do_a_trick()