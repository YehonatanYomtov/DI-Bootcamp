# Part 2
# 1) Create a file called menu_editor.py , which will have the following functions:
#   1) show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
#       - View an Item (V)
#       - Add an Item (A)
#       - Delete an Item (D)
#       - Update an Item (U)
#       - Show the Menu (S)
#       Call the appropriate function that matches the user’s input.

#   2) add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#       - If the item was added successfully print a message which states: item was added successfully.

#   3) remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#       - If the item was deleted successfully – print a message to let the user know this was completed.
#       - If not – print a message which states that there was an error.

#   4) update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#       - If the item was updated successfully – print a message to let the user know this was completed.
#       - If not – print a message which states that there was an error.

#   5) show_restaurant_menu() - print the restaurant’s menu.

# 2) When the user chooses to exit the program, display the restaurant menu and exit the program.

from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("""
        -- Restaurant Menu Manager --
        
        Please choose an option:
        View an Item (V)
        Add an Item (A)
        Delete an Item (D)
        Update an Item (U)
        Show the Menu (S)
        Exit (E)
        """)

        choice = input("Enter your choice: ").upper()

        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            show_restaurant_menu()
            print("\nThank you for coming to our restaurant! ❤️")
            break
        else:
            print("Invalid choice, please try again.")

def view_item():
    name = input("Enter the item name you want to view: ") 
    item = MenuManager.get_by_name(name)
    print(f"Name: {item[1]}, Price: {item[2]}")

def add_item_to_menu():
    name = input("Enter the item's name: ")
    price = int(input("Enter the price of the item: "))
    
    try:
        item = MenuItem(name, price)
        item.save()
        
        print("Item was added successfully.")
    except ValueError:
        print("Invalid price. Please enter a valid number.")
    
def remove_item_from_menu():
    name = input("Please input the name of the item you want to delete: ")

    try:
        item = MenuItem(name, 0)
        item.delete()

        print("Item was deleted successfully.")
    except ValueError:
        print("Invalid input Please enter a valid input.")

def update_item_from_menu():
    current_name = input("Enter the item name to update: ")
    current_price = int(input("Enter the price of the item to update: "))

    new_name = input("Enter the new item's name: ")
    new_price = int(input("Enter the price of the new item: "))

    try:
        item = MenuItem(current_name, current_price)
        item.update(new_name, new_price)

        print("Item was updated successfully.")
    except ValueError:
        print("Invalid input. Please enter a valid input.")

def show_restaurant_menu():
    items = MenuManager.all_items()

    for item in items:
        print(f"Name: {item[1]}, Price: {item[2]}")

def main():
    show_user_menu()

if __name__ == "__main__":
    main()