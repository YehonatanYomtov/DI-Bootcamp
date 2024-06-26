# Instructions
# 1) Using this REST Countries API, create the functionality which will write 10 random countries to your database.

# 2)These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.

import psycopg2
import requests
import random

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'Yehonatan8448'
DATABASE = 'countries'
PORT = '5432'

connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)

cursor = connection.cursor()

def insert_country_to_menu(name: str, capital: str, flag: str, subregion: str, population: int) -> None:
    try:
        insert_query = "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)"

        cursor.execute(insert_query, (name, capital, flag, subregion, population))
        connection.commit()
    except Exception as e:
        print(f"Failed to INSERT country: {e}")

def main():
    try:
        response = requests.get('https://restcountries.com/v3.1/all')
        data = response.json() 
        random_countries = random.sample(data, 10)

        for country in random_countries:
            name = country['name']['common']
            capital = country['capital'][0]
            flag = country['flags']['png']
            subregion = country['subregion']
            population = country['population']

            insert_country_to_menu(name, capital, flag, subregion, population)

    except requests.exceptions.HTTPError as errh:
        print(f"HTTP Error: {errh}")
    except requests.exceptions.ConnectionError as errc:
        print(f"Error Connecting: {errc}")
    except requests.exceptions.Timeout as errt:
        print(f"Timeout Error: {errt}")
    except requests.exceptions.RequestException as err:
        print(f"OOps: Something Else: {err}")

    connection.close()

if __name__ == '__main__':
    main()