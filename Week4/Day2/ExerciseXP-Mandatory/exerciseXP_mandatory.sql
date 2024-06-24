-- 🌟 Exercise 2 : Dvdrental Database
-- Instructions
-- Setup
-- We will install a new sample database on our PostgreSQL servers.
-- Download this sample database file

-- We will use the newly installed dvdrental database.

-- 1) In the dvdrental database write a query to select all the columns from the “customer” table.
select * 
from customer;

-- 2) Write a query to display the names (first_name, last_name) using an alias named “full_name”.
select first_name || ' ' || last_name as full_name
from customer;

-- 3) Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
select distinct create_date
from customer;

-- 4) Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
select *
from customer
order by first_name desc;

-- 5) Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
select film_id, title, description, release_year, rental_rate
from film
order by rental_rate;

-- 6) Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
select address, phone
from address
where district = 'Texas';

-- 7) Write a query to retrieve all movie details where the movie id is either 15 or 150.
select *
from film
where film_id in (15, 150);

-- 8) Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
select film_id, title, description, length, rental_rate
from film
where title = 'Elf Murder';

-- 9) No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
select film_id, title, description, length, rental_rate
from film
where title ilike 'lo%';

-- 10) Write a query which will find the 10 cheapest movies.
select * 
from film
order by rental_rate asc
limit 10;

-- 11) Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
select * 
from film
order by rental_rate asc
offset 10
fetch next 10 rows only;

-- 12) Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
select c.first_name, c.Last_name, p.amount, p.payment_date
from customer c 
inner join payment p on c.customer_id = p.customer_id
order by c.customer_id, p.payment_id;

-- 13) You need to check your inventory. Write a query to get all the movies which are not in inventory.
select f.*
from film f
left join inventory i on f.film_id = i.film_id
where i.film_id is null;

-- 14) Write a query to find which city is in which country.
select ci.city, co.country
from city ci
inner join country co on ci.country_id = co.country_id;

-- 15) Bonus: You want to be able to see how your sellers have been doing? 
-- Write a query to get the customer’s id, names (first and last), the amount and the date of payment
-- ordered by the id of the staff member who sold them the dvd.
select c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, s.staff_id
from payment p
inner join customer c on c.customer_id = p.customer_id
inner join staff s on s.staff_id = p.staff_id
order by s.staff_id;






