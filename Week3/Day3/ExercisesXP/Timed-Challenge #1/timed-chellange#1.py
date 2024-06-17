# Write a program to reverse the sentence wordwise.

# Input:
# You have entered a wrong domain
# Output:
# domain wrong a entered have You

text = "You have entered a wrong domain"

text_to_list = text.split()

reverse_list = text_to_list.reverse()

result = " ".join(text_to_list)

print(result)

    