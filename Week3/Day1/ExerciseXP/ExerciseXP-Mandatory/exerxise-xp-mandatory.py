# # 🌟 Exercise 1: Cats
# # Instructions
# # Using this class

# # class Cat:
# #     def __init__(self, cat_name, cat_age):
# #         self.name = cat_name
# #         self.age = cat_age
# # 1) Instantiate three Cat objects using the code provided above.
# # 2) Outside of the class, create a function that finds the oldest cat and returns the cat.
# # 3) Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

# class Cat:
#    def __init__(self, cat_name : str, cat_age : int) -> None:
#       self.name = cat_name
#       self.age = cat_age

# cat_one = Cat("spots", 3)
# cat_two = Cat("Maya", 7)
# cat_three = Cat("Milky", 5)

# def find_oldest_cat(*cats : Cat) -> None:
#    list_of_cat_classes = list(cats)
   
#    oldest_cat = max(list_of_cat_classes, key = lambda cat: cat.age)
         
#    print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

# def main():
#    find_oldest_cat(cat_one, cat_two, cat_three)
   
# if __name__ == "__main__":
#    main()

# ---------------------

# # 🌟 Exercise 2 : Dogs
# # Instructions
# # 1) Create a class called Dog.
# # 2) In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# # 3) Create a method called bark that prints the following string “<dog_name> goes woof!”.
# # 4) Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# # 5) Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# # 6) Print the details of his dog (ie. name and height) and call the methods bark and jump.
# # 7) Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# # 8) Print the details of her dog (ie. name and height) and call the methods bark and jump.
# # 9) Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

# from typing import Union

# class Dog:
#    def __init__(self, name : str, height : Union[int, float]) -> None:
#       self.name = name
#       self.height = height
   
#    def bark(self) -> None:
#       print(f"{self.name} goes woof!")
   
#    def jump(self) -> None:
#       print(f"{self.name} jumps {self.height * 2} cm high!")

# def main():
   
#    davids_dog = Dog("Rex", 50)
#    sarahs_dog = Dog("Teacup", 20)

#    print(davids_dog.name)
#    print(davids_dog.height)
#    davids_dog.bark()
#    davids_dog.jump()

#    print(sarahs_dog.name)
#    print(sarahs_dog.height)
#    sarahs_dog.bark()
#    sarahs_dog.jump()

#    if davids_dog.height > sarahs_dog.height:
#       print(f"{davids_dog.name} is bigger!")
#    else:
#       print(f"{sarahs_dog.name} is bigger!")

# if __name__ == "__main__":
#    main()

# ---------------------

# # 🌟 Exercise 3 : Who’s The Song Producer?
# # Instructions
# # 1) Define a class called Song, it will show the lyrics of a song.
# # 2) Its __init__() method should have two arguments: self and lyrics (a list).
# # 3) Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# # 4) Create an object, for example:

# # stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

# # 5) Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

# class Song:
#    def __init__(self, lyrics : list) -> None:
#       self.lyrics = lyrics

#    def sing_me_a_song(self) -> None:
#       for lyric in self.lyrics:
#          print(lyric)

# def main():      
#    stairway = Song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])

#    stairway.sing_me_a_song()

# if __name__ == "__main__":
#    main()

# ---------------------

# Exercise 4 : Afternoon At The Zoo
# Instructions
# 1) Create a class called Zoo.
# 2) In this class create a method __init__ that takes one parameter: zoo_name.
# 3) It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# 4) Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# 5) Create a method called get_animals that prints all the animals of the zoo.
# 6) Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# 7) Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example:

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }

# 8) Create a method called get_groups that prints the animal/animals inside each group.
# 9) Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

class Zoo:
   def __init__(self, zoo_name : str) -> None:
      self.zoo_name = zoo_name
      self.animals = []
      self.sorted_animals_dict = {}

   def add_animal(self, new_animal : str) -> None:
      if new_animal not in self.animals:
         self.animals.append(new_animal)
         
   def get_animal(self):
      print("Animals in the zoo:")
      for animal in self.animals:
         print(animal)
   
   def sell_animal(self, animal_sold : str) -> None:
      if animal_sold in self.animals:
         self.animals.remove(animal_sold)
      
   
   def sort_animals(self) -> None:
      self.animals.sort()
      
      current_letter = ''
      group_number = 1
   
      for animal in self.animals:
         if animal[0].lower() != current_letter.lower():
            current_letter = animal[0].lower()
            self.sorted_animals_dict[group_number] = animal
            group_number += 1
         else:
            self.sorted_animals_dict[group_number - 1] = self.sorted_animals_dict[group_number - 1].split()
            self.sorted_animals_dict[group_number - 1].append(animal)
            
   def get_groups(self):
      for group in self.sorted_animals_dict.values():
         print(f"==>>: {group}")
         

my_zoo = Zoo("ramat_gan_safari")

my_zoo.add_animal("Baboon")
my_zoo.add_animal("Bear")
my_zoo.add_animal("Cougar")
my_zoo.add_animal("Eel")
my_zoo.add_animal("Ape")
my_zoo.add_animal("Cat")
my_zoo.add_animal("Emu")

my_zoo.get_animal()

my_zoo.sell_animal('Eel')

my_zoo.sort_animals()

my_zoo.get_groups()
