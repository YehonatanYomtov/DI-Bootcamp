import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'Yehonatan8448'
DATABASE = 'restaurantMenu'
PORT = '5432'

connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
    
cursor = connection.cursor()

class MenuManager:
    def __init__(self) -> None:
        pass
    
    @classmethod
    def get_by_name(self, item_name: str):
        try:
            select_query = "SELECT * FROM menu_items where item_name = %s"
        
            cursor.execute(select_query, (item_name,))
            result = cursor.fetchone() 
            
            if result:
                return result
            else:
                return None
        except Exception as e:
            print(f"Error fetching item by name: {e}")
        
    @classmethod
    def all_items(self):
        try:
            select_query = "SELECT * FROM menu_items"
            cursor.execute(select_query)
            
            items = []
            rows = cursor.fetchall()
            
            for row in rows:
                items.append(row) 
            return items
        except Exception as e:
            print(f"Error fetching all items: {e}")