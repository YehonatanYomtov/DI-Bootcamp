-- 🌟 Exercise 1: DVD Rental
-- Instructions
-- 1) Get a list of all the languages, from the language table.
select * 
from language;

-- 2) Get a list of all films joined with their languages – select the following details : film title, description, and language name.
select f.title, f.description, l.name
from film f
join language l
on f.language_id = l.language_id;

-- 3) Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
select f.title, f.description, l.name
from language l
left join film f
on l.language_id = f.language_id;

-- 4) Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- insert into new_film (name) values 
-- 	('Yehonatan of the old'),
-- 	('Yehonatan of the young');

-- 5) Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- 		- review_id – a primary key, non null, auto-increment.
-- 		- film_id – references the new_film table. The film that is being reviewed.
-- 		- language_id – references the language table. What language the review is in.
-- 		- title – the title of the review.
-- 		- score – the rating of the review (1-10).
-- 		- review_text – the text of the review. No limit on the length.
-- 		- last_update – when the review was last updated.

-- create table customer_review (
-- 	review_id serial primary key, 
-- 	film_id int not null references new_film(id) on delete cascade,
-- 	language_id int not null references language(language_id), 
-- 	title varchar(30) not null, 
-- 	score smallint not null check (score between 1 and 10), 
-- 	review_text text, 
-- 	last_update timestamp default current_timestamp
-- );

-- 6) Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- insert into customer_review (film_id, language_id, title, score, review_text, last_update) 
-- values 
-- (
-- 	(select id from new_film where name = 'Yehonatan of the young'),
-- 	(select language_id from language where name = 'English'),
-- 	(select name from new_film where name = 'Yehonatan of the young'),
-- 	-- Or more manualy just do this: 'Yehonatan of the young'
-- 	8,
-- 	'Great acting and good story.',
-- 	current_timestamp
-- ) , 
-- (
-- 	(select id from new_film where name = 'Yehonatan of the old'),
-- 	(select language_id from language where name = 'English'),
-- 	(select name from new_film where name = 'Yehonatan of the old'),
-- 	-- Or more manualy just do this: 'Yehonatan of the old'
-- 	4,
-- 	'Not the best acting. Also the story didn`t make sense.',
-- 	current_timestamp
-- );

-- 7) Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- delete from new_film where id = 1;
-- EXPLANATION: The customer review gets deleted as well, since we made sure when we created the table that if the id of the new_film gets deleted all refrences taht point to that id will be deleted as well.


-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- 1) Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- update film 
-- set language_id = 2
-- where film_id in (2, 3, 4);

-- 2) Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- ANSWER: The 'address_id' field is refrenced to the 'address' table which has a 'address_id' field inside it. It will effect the inserting of a new 'customer' row if we try to insert a 'address_id' that doesn't exist in the 'address' table it will be rejected. 

-- 3) We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- ANSWER: It works easly in our case, but usualy you need to check if the table has any refrences elsewhere, incase we didn't define the 'on delete' query.
-- drop table customer_review;

-- 4) Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- select count(*) 
-- from rental
-- where return_date is null;

-- 5) Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- select * 
-- from inventory i
-- join film f on f.film_id = i.film_id
-- join rental r on r.inventory_id = i.inventory_id
-- where r.return_date is null 
-- order by f.replacement_cost desc
-- limit 30; 

-- 6) Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- 		- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
		-- select *
		-- from film f
		-- join film_actor fa on f.film_id = fa.film_id
		-- join actor on actor.actor_id = fa.actor_id
		-- where f.description ilike '%sumo wrestler%'
		-- and actor.first_name = 'Penelope'
		-- and actor.last_name = 'Monroe'

-- 		- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
		-- select *
		-- from film f
		-- where f.description ilike '%documentary%'
		-- and f.length < 60
		-- and f.rating = 'R'

-- 		- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
		-- select *
		-- from film f
		-- join inventory i on i.film_id = f.film_id
		-- join rental r on r.inventory_id = i.inventory_id
		-- join customer c on c.customer_id = r.customer_id
		-- where c.first_name = 'Matthew'
		-- and c.last_name = 'Mahan'
		-- and f.rental_rate > 4.00
		-- and r.return_date between date '2005-07-28' and date '2005-08-01'

-- 		- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
		-- select *
		-- from film f
		-- join inventory i on i.film_id = f.film_id
		-- join rental r on r.inventory_id = i.inventory_id
		-- join customer c on c.customer_id = r.customer_id
		-- where c.first_name = 'Matthew'
		-- and c.last_name = 'Mahan'
		-- and (f.title ilike '%boat%' 
		-- or f.description ilike '%boat%')
		-- and f.replacement_cost > (
  --      		select avg(replacement_cost)
  --      		from film
  --  			);
		





