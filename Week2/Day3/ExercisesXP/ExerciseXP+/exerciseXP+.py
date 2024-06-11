# 🌟 Exercise 1 : Student Grade Summary
# Instructions
# You are given a dictionary containing student names as keys and lists of their grades as values. Your task is to create a summary report that calculates the average grade for each student, assigns a letter grade, and determines the class average.

# Initial Data:

# student_grades = {
#     "Alice": [88, 92, 100],
#     "Bob": [75, 78, 80],
#     "Charlie": [92, 90, 85],
#     "Dana": [83, 88, 92],
#     "Eli": [78, 80, 72]
# }

# Requirements:
# 1) Calculate the average grade for each student and store the results in a new dictionary called student_averages.
# 2) Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades:
#  A: 90 and above
#  B: 80 to 89
#  C: 70 to 79
#  D: 60 to 69
#  F: Below 60
# 3) Calculate the class average (the average of all students’ averages) and print it.
# 4) Print the name of each student, their average grade, and their letter grade.

# Hints:
# Use loops to iterate through the student_grades dictionary.
# You may use sum() and len() functions to help calculate averages.
# Initialize empty dictionaries for student_averages and student_letter_grades before filling them with data.

# student_grades = {
#    "Alice": [88, 92, 100],
#    "Bob": [75, 78, 80],
#    "Charlie": [92, 90, 85],
#    "Dana": [83, 88, 92],
#    "Eli": [78, 80, 72]
# }

# student_averages = {}

# student_letter_grades = {}

# class_average = 0

# import math

# for student, grades in student_grades.items() :
#    average = sum(grades) / len(grades)
#    student_averages[student] = math.floor(average)
#    class_average += math.floor(average)
    
# for student, average in student_averages.items() :
#    if average >= 90 :
#       student_letter_grades[student] = "A"
#    elif average in range(80, 90) :
#       student_letter_grades[student] = "B"
#    elif average in range(70, 80) :
#       student_letter_grades[student] = "C"
#    elif average in range(60, 70) :
#       student_letter_grades[student] = "D"
#    elif average < 60 :
#       student_letter_grades[student] = "F"
      
# print(class_average / len(student_grades))

# for student, average in student_averages.items() :
#    grade = ''
#    for s, grade in student_letter_grades.items() :
#       if s == student :
#          print(f"Name: {student}. Average: {average}. Grade: {grade} ")
#          break

# ------------------


# 🌟 Exercise 2 : Advanced Data Manipulation And Analysis
# Instructions
# In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior. The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.

# sales_data = [
#     {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
#     {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
#     {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
#     {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
#     {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
#     {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
#     {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
# ]

# Tasks:
# 1) Total Sales Calculation: Calculate the total sales for each product category (i.e., the total revenue generated from each type of product). Use a loop to iterate through the data and a dictionary to store the total sales for each product.

# 2) Customer Spending Profile: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent.

# 3) Sales Data Enhancement:
#  - Add a new field to each transaction called “total_price” that represents the total price for that transaction (quantity * price).
#  - Use a loop to modify the sales_data list with this new information.

# 4) High-Value Transactions:
#  - Using list comprehension, create a list of all transactions where the total price is greater than $500.
#  - Sort this list by the total price in descending order.

# 5) Customer Loyalty Identification:
#  - Identify any customer who has made more than one purchase, suggesting potential loyalty.
#  - Use a dictionary to count purchases per customer, then use a loop or comprehension to identify customers meeting the loyalty criterion.

# Bonus: Insights and Analysis:
# Calculate the average transaction value for each product category.
# Identify the most popular product based on the quantity sold.
# Provide insights into how these analyses could inform the company’s marketing strategies.

sales_data = [
   {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
   {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
   {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
   {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
   {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
   {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
   {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

total_sales = {}

customer_spending = {}

# 1)
for sale in sales_data :
   product = sale["product"]
   revenue = sale["price"] * sale["quantity"]

   if product in total_sales :
      total_sales[product] += revenue
   else :
      total_sales[product] = revenue

# 2)
for sale in sales_data:
   customer = sale["customer_id"]
   money_spent = sale["price"] * sale["quantity"]

   if customer in customer_spending :
      customer_spending[customer] += money_spent
   else : 
      customer_spending[customer] = money_spent

# 3)
for sale in sales_data :
   sale['total_price'] = sale["price"] * sale["quantity"]

# 4)
all_transactions_greater_then_500 = [transaction for transaction in sales_data if transaction["total_price"] > 500]
sorted_sales_data = sorted(all_transactions_greater_then_500, key = lambda tran: tran["total_price"], reverse = True)

# 5) 
amount_of_purchases = {}

for sale in sales_data :
   customer_id = sale["customer_id"]
   
   if customer_id in amount_of_purchases :
      amount_of_purchases[customer_id] += 1
   else :
      amount_of_purchases[customer_id] = 1
   
   # Please take note that the question specified this: Identify any customer who has made more than ONE purchase (I asked the teacher if the question sounds like the loyalty criterion is any purchase > 1 or > 2, and he said > 1)
loyal_customers = [customer_id for customer_id, amount in amount_of_purchases.items() if amount > 1] # If you meant more then 2 since then only one of the users are loyal the costumer with the id of 1--> [1]

# Bonus: Insights and Analysis:
# Calculate the average transaction value for each product category.
# Identify the most popular product based on the quantity sold.
# Provide insights into how these analyses could inform the company’s marketing strategies.

