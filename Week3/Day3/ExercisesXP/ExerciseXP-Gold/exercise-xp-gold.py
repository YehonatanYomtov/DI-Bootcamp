# Instruction: Information From The User
# Harder Daily Challenge
# Notice : solve this exercise using a lambda function.

# Ask a user for the following inputs 5 times:
# Name (string)
# Age (int)
# Score (int)
# Build a list of tuples using these inputs, each tuple should contain a name, age and score.
# Sort the list by the following priority Name > Age > Score.
# If the following tuples are given as input to the script:

# Tom,19,80
# John,20,90
# Jony,17,91
# Jony,17,93
# Json,21,85
# Then, the output of the program should be:
# [('John', '20', '90'), ('Jony', '17', '91'), ('Jony', '17', '93'), ('Json', '21', '85'), ('Tom', '19', '80')]
# Note : The lambda function will not print but sort

namesInput = input("Enter 5 names separated by comma: ")
agesInput = input("Enter 5 ages separated by comma: ")
scoresInput = input("Enter 5 scores separated by comma: ")

listOfNames = namesInput.split(',')
listOfAges = agesInput.split(',')
listOfScores = scoresInput.split(',')

listOfTupples = []

for i in range(len(listOfNames)):
    listOfTupples.append((listOfNames[i], int(listOfAges[i]), int(listOfScores[i])))

sorted_data = sorted(listOfTupples, key=lambda x: (x[0], x[1], x[2]))
