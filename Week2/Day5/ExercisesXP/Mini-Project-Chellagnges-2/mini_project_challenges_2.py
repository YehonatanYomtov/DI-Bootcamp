string1 = ''

for i in range(3):
    for j in range(5):
        if i == 0:
            if j == 2:
                string1 += "*"
            elif j == 0 or j == 1 or j == 3:
                string1 += " "
            else:
                string1 += "\n"
        
        elif i == 1:
            if j == 1 or j == 2 or j == 3:
                string1 += "*"
            elif j == 0:
                string1 += " "
            else:
                string1 += " \n"
        
        else:
            string1 += "*"
    
print(string1)

string2 = ''

# for i in range(5):

#     if i == 0:
#         string2 += (" " * 4) + ("*") + "\n"
    
#     elif i == 1:
#         string2 += (" " * 3) + ("*" * 2) + "\n"
    
#     elif i == 2:
#         string2 += (" " * 2) + ("*" * 3) + "\n"
       
#     elif i == 3:
#         string2 += (" " * 1) + ("*" * 4) + "\n"

#     else:
#         string2 += "*" * 5

for i in range(5):
    string2 += ' ' * (4 - i) + '*' * (i + 1) + '\n'

print(string2)

string3 = ''
count = 6

for i in range(11):
    if i <= 5:
        string3 += "*" * i + " " * (4 - i) + '\n'
    else:
        string3 += " " * (i - 6) + "*" * (count - 1)  + '\n'
        count = count - 1

print(string3)

# -------------------------------

# Exercise 2
# Instructions
# Analyse this code before executing it. Write some commnts next to each line. Write the value of each variable and their changes, and add the final output. Try to understand the purpose of this program.

# my_list = [2, 24, 12, 354, 233]

# for i in range(len(my_list) - 1): 🟢 --> looping over the length of the list - 1 (4) 

#     minimum = i  🟢 --> setting a variable with the current count of the loop, and it will be the minimum

#     for j in range( i + 1, len(my_list)):  🟢 --> nested loop, that will be iterating from the current i index + 1 untill the length of the list named 'my_list'

#         if(my_list[j] < my_list[minimum]):  🟢 --> setting a condition if the value in the 'my_list' at index 'j' (the count of the nested loop) if it is less then the value in 'my_list' at index == to the value in the 'minimum' variable which corisponds to the count value of the first loop.

#             minimum = j  🟢 --> if true then the minimum should be set to 'j'.

#             if(minimum != i):  🟢 --> another condition if the 'minimum' variable doesn't == to 'i' (the count of the first loop) execute the next line of code.

#                 my_list[i], my_list[minimum] = my_list[minimum], my_list[i]  🟢 --> Set the 'my_list' at index 'i' will have the value of 'my_list' at index 'minimum' and 'my_list' at index of the 'minimum' value will == 'my_list' at index 'i'

# print(my_list)  🟢 --> prints the result.

# Exercise 2
# Instructions
# Analyse this code before executing it. Write some commnts next to each line. Write the value of each variable and their changes, and add the final output. Try to understand the purpose of this program.

# my_list = [2, 24, 12, 354, 233]

# for i in range(len(my_list) - 1): 🟢 --> looping over the length of the list - 1 (4) 

#     minimum = i  🟢 --> setting a variable with the current count of the loop, and it will be the minimum

#     for j in range( i + 1, len(my_list)):  🟢 --> nested loop, that will be iterating from the current i index + 1 untill the length of the list named 'my_list'

#         if(my_list[j] < my_list[minimum]):  🟢 --> setting a condition if the value in the 'my_list' at index 'j' (the count of the nested loop) if it is less then the value in 'my_list' at index == to the value in the 'minimum' variable which corisponds to the count value of the first loop.

#             minimum = j  🟢 --> if true then the minimum should be set to 'j'.

#             if(minimum != i):  🟢 --> another condition if the 'minimum' variable doesn't == to 'i' (the count of the first loop) execute the next line of code.

#                 my_list[i], my_list[minimum] = my_list[minimum], my_list[i]  🟢 --> Set the 'my_list' at index 'i' will have the value of 'my_list' at index 'minimum' and 'my_list' at index of the 'minimum' value will == 'my_list' at index 'i'

# print(my_list)  🟢 --> prints the result which is a sorted list from smallest to largest number

my_list = [2, 24, 12, 354, 233]
for i in range(len(my_list) - 1):
    minimum = i
    for j in range( i + 1, len(my_list)):
        if(my_list[j] < my_list[minimum]):
            minimum = j
            if(minimum != i):
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
print(my_list)