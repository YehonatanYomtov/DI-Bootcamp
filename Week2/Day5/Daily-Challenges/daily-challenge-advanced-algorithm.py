# Instructions
# Here is a python code that generate a list of 20000 random numbers, called list_of_numbers.
# Extend this code to guess how many couples of numbers in list_of_numbers sum to target_number.

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number = 3728

def find_all_equals_to_target(list, target):
   all_pairs = []
   
   for prev_num, cur_num in zip(list[:-1], list[1:]):
      if prev_num + cur_num == target:
         all_pairs.append((prev_num, cur_num))

   if len(all_pairs) > 0:
      print(f"These are all the pairs that together equal to {target_number} :")
      
      for pair in all_pairs:
         print(pair)     
   else:
      print("No match yet...")




find_all_equals_to_target(list_of_numbers, target_number)