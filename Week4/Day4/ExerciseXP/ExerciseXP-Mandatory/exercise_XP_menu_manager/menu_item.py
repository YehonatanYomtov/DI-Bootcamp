# PART 1
# In this exercise we will use PostgreSQL and Python.

# 2)Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns

#   - item_id : SERIAL PRIMARY KEY
#   - item_name : VARCHAR(30) NOT NULL
#   - item_price : SMALLINT DEFAULT 0

# 2) In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.

# 3) Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.

# 4) In the file menu_manager.py, create a new class called MenuManager
#   - Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.
#   - Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

import psycopg2

from menu_manager import MenuManager

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'Yehonatan8448'
DATABASE = 'restaurantMenu'
PORT = '5432'

connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
    
cursor = connection.cursor()

# =*=*=*=*=*=*=*=*=*=

def insert_item_to_menu(item_name: str, item_price: int) -> None:
    try:
        insert_query = "INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)"
        
        cursor.execute(insert_query, (item_name, item_price))
        connection.commit()
    except Exception as e:
        print(f"Failed to INSERT item: {e}")

def delete_item_from_menu(item_name: str) -> None:
    print(item_name)
    try:
        delete_query = "DELETE FROM menu_items WHERE item_id = (select item_id where item_name = %s)"
        
        cursor.execute(delete_query, (item_name,))
        connection.commit()
    except Exception as e:
        print(f"Failed to DELETE item: {e}")

def update_item_in_menu(current_name: str, new_name: str = None, new_price: int = None) -> None:
    try:
        if new_name and new_price:
            update_query = """
                UPDATE menu_items 
                SET item_name = %s, item_price = %s 
                WHERE item_name = %s
                """
            cursor.execute(update_query, (new_name, new_price, current_name))
        elif new_name:
            update_query = """
                UPDATE menu_items 
                SET item_name = %s  
                WHERE item_name = %s
                """
            cursor.execute(update_query, (new_name, current_name))
        elif new_price:
            update_query = """
                UPDATE menu_items 
                SET item_price = %s  
                WHERE item_name = %s
                """
            cursor.execute(update_query, (new_price, current_name))
            
        connection.commit()
    except Exception as e:
        print(f"Failed to UPDATE item: {e}")
# =*=*=*=*=*=*=*=*=*=

class MenuItem:
    def __init__(self, name: str, price: int) -> None:
        self.name = name
        self.price = price

    def __str__(self) -> str:
        return f"{self.name}, {self.price}"

    def save(self) -> None:
        insert_item_to_menu(self.name, self.price)

    def delete(self) -> None:
        delete_item_from_menu(self.name)

    def update(self, new_name: str, new_price: int) -> None:
        update_item_in_menu(self.name, new_name, new_price)

def main():
    item = MenuItem('Burger', 35)
    # print(item)
    # item.save()
    # item.delete()
    # item.update('Veggie Burger', 37)
    # item.update('Burger', 35)
    # item2 = MenuManager.get_by_name("Beef Stew")
    item2 = MenuManager.get_by_name("Burger")
    # print(f"==>> item2: {item2}")
    items = MenuManager.all_items()
    # print(f"==>> items: {items}")
    connection.close()
    
if __name__ == '__main__':
    main()