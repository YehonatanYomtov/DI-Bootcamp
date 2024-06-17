# # 🌟 Exercise 1 : Pets
# # Instructions
# # Using this code:

# # class Pets():
# #     def __init__(self, animals):
# #         self.animals = animals

# #     def walk(self):
# #         for animal in self.animals:
# #             print(animal.walk())

# # class Cat():
# #     is_lazy = True

# #     def __init__(self, name, age):
# #         self.name = name
# #         self.age = age

# #     def walk(self):
# #         return f'{self.name} is just walking around'

# # class Bengal(Cat):
# #     def sing(self, sounds):
# #         return f'{sounds}'

# # class Chartreux(Cat):
# #     def sing(self, sounds):
# #         return f'{sounds}'

# # 1) Create another cat breed named Siamese which inherits from the Cat class.
# # 2) Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# # 3) Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# # 4) Take all the cats for a walk, use the walk method.

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# all_cats = [Cat("Bengal", 3), Cat("Chartreux", 4), Cat("Siamese", 7)]

# siamese = Cat("Siamese", 5)

# sara_pets = Pets(all_cats)

# sara_pets.walk()

# # 🌟 Exercise 2 : Dogs
# # Instructions
# # 1) Create a class called Dog with the following attributes name, age, weight.
# # 2) Implement the following methods in the Dog class:
# # - bark: returns a string which states: “<dog_name> is barking”.
# # - run_speed: returns the dogs running speed (weight/age*10).
# # - fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# # 3) Create 3 dogs and run them through your class.

# from typing import Union

# class Dog :
#     def __init__(self, name : str, age : int, weight : int) -> None:
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self) -> str:
#         return f"{self.name} is barking"
    
#     def run_speed(self) -> Union[int, float]:
#         return self.weight / self.age * 10
    
#     def fight(self, other_dog : 'Dog') -> str:
#         if other_dog.run_speed() * other_dog.weight > self.run_speed() * self.weight:
#             return f"{other_dog.name} won the fight!"
#         else:
#             return f"{self.name} won the fight!"

# alpha = Dog("Alpah", 8, 50)
# spots = Dog("Spots", 6, 70)
# snow = Dog("Snow", 5, 40)

# print(alpha.bark())
# print(alpha.run_speed())
# print(alpha.fight(spots))


# 🌟 Exercise 3 : Dogs Domesticated ----> IS IN THE FILE NAMED : exercise-3-in-exerciseXP.py


# # 🌟 Exercise 4 : Family
# # Instructions
# # 1) Create a class called Family and implement the following attributes:

# #   - members: list of dictionaries
# #   - last_name : (string)

# # 2) Implement the following methods:

# #   - born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# #   - is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# #   - family_presentation: a method that prints the family’s last name and all the members’ details.

# # 3) Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

# #     [
# #         {'name':'Michael','age':35,'gender':'Male','is_child':False},
# #         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
# #     ]

from typing import Union

class Family:
    def __init__(self, members: list[dict], last_name: str) -> None:

        self.members = members
        self.last_name = last_name

    def born(self, **kwargs: Union[str, int, bool]) -> None:
        self.members.append(kwargs)
        if "name" in kwargs:
            print(f"Congrats on the birth of {kwargs['name']}! 🎉 \n")

    def is_18(self, family_member: dict) -> bool:
        if family_member["age"] > 18:
            return True
        else: 
            return False

    def family_presentation(self) -> None:
        print(f"This is the {self.last_name} family. And these are its members: \n")
    
        for family_member in self.members:
            family_info = ""

            for k, v in family_member.items():
                family_info += f"{k}: {v}. "

            print(f"{family_info} \n")

jax_family = Family([
    {
        'name': 'Michael', 
        'age': 35, 
        'gender': 'Male', 
        'is_child': False
        },
    {
        'name': 'Sarah', 
        'age': 32, 
        'gender': 'Female', 
        'is_child': False
        }
], "Jax")

jax_family.born(name = "Rose", age = 0, gender = 'Female', is_child = True)

jax_family.is_18(jax_family.members[0])

jax_family.family_presentation()

# 🌟 Exercise 5 : TheIncredibles Family
# Instructions
# 1) Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)

# 2) Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.

# 3) Add a method called incredible_presentation which :
#   - Print a sentence like “*Here is our powerful family **”
#   - Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)

# 4) Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#     ]

# 5) Call the incredible_presentation method.

# 6) Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.

# 7) Call the incredible_presentation method again.

class TheIncredibles(Family):
    def __init__(self, members: list[dict], last_name: str) -> None:
        super().__init__(members, last_name)

    def use_power(self, family_member: dict):
        try:
            if self.is_18(family_member):
                print(f"This is {family_member['name']}'s power: {family_member['power']}")
        except BaseException as e:
            if not self.is_18(family_member):
                print(f"{family_member['name']} is not 18 yet, can't preform their power.")

    def incredible_presentation(self):
        self.family_presentation()


mark_incredible_family = TheIncredibles(
    [
        {
            "name": 'Michael',
            "age": 35, 
            "gender": 'Male', 
            "is_child": False, 
            "power": 'fly', 
            "incredible_name": 'MikeFly'
        }, 
        { 
            "name": 'Sarah',
            "age": 32,
            "gender": 'Female',
            "is_child": False,
            "power": 'read minds',
            "incredible_name": 'SuperWoman'
        }
    ], 
    'Incredibles'
)

mark_incredible_family.incredible_presentation()

mark_incredible_family.born(name = "Jack", age = 0, gender = "Male", is_child = True, power = "Unknown Power", incredible_name = "IncrediBaby")

mark_incredible_family.incredible_presentation()