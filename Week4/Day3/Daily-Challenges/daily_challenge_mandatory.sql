-- Instructions
-- You are going to practice tables relationships

-- Part I

-- 1) Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- 		- A customer can have only one profile, and a profile belongs to only one customer
-- 		- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- 		- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

-- create table customer (
-- 	id serial primary key,
-- 	first_name varchar(30) not null,
-- 	last_name varchar(30) not null
-- );

-- create table customer_profile (
-- 	id serial primary key,
-- 	customer_id int references customer(id),
-- 	is_logged_in boolean default false
-- );

-- 2) Insert those customers
-- 		- John, Doe
-- 		- Jerome, Lalu
-- 		- Lea, Rive

-- insert into customer (first_name, last_name) 
-- values 
-- 	('John', 'Doe'),
-- 	('Jerome', 'Lalu'),
-- 	('Lea', 'Rive');

-- 3) Insert those customer profiles, use subqueries
-- 		- John is loggedIn
-- 		- Jerome is not logged in

-- insert into customer_profile (is_logged_in, customer_id) 
-- values 
-- 	(true, (select id from customer where first_name = 'John' and last_name = 'Doe')),
-- 	(false, (select id from customer where first_name = 'Jerome' and last_name = 'Lalu'));
	

-- 4) Use the relevant types of Joins to display:
-- 		- The first_name of the LoggedIn customers
		-- select c.first_name
		-- from customer c
		-- join customer_profile cp on cp.customer_id = c.id
		-- where  cp.is_logged_in is true;

-- 		- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
		-- select c.first_name, cp.is_logged_in
		-- from customer c
		-- left join customer_profile cp on cp.customer_id = c.id;

-- 		- The number of customers that are not LoggedIn
		-- select count(*)
		-- from customer c
		-- left join customer_profile cp on cp.customer_id = c.id
		-- where  cp.is_logged_in is false or cp.is_logged_in is null;

	
-- Part II:

-- 1) Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

-- create table Book (
-- book_id serial primary key,
-- title varchar(30) not null,
-- author varchar(30) not null
-- );

-- 2) Insert those books :
-- 		- Alice In Wonderland, Lewis Carroll
-- 		- Harry Potter, J.K Rowling
-- 		- To kill a mockingbird, Harper Lee

-- insert into Book (title, author)
-- values 
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');

-- 3) Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);

-- create table Student (
-- student_id serial primary key,
-- name varchar(30) not null unique,
-- age smallint not null check (age <= 16)
-- );

-- 4) Insert those students:
-- 		- John, 12
-- 		- Lera, 11
-- 		- Patrick, 10
-- 		- Bob, 14

-- insert into Student (name, age)
-- values 
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);


-- 5) Create a table named Library, with the columns :
-- 		- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- 		- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- 		- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- 		- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- 		- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- 		- The pair of Foreign Keys is the Primary Key of the Junction Table

-- create table Library (
-- book_fk_id int references Book(book_id) on delete cascade on update cascade,
-- student_fk_id int references Student(student_id) on delete cascade on update cascade,
-- borrowed_date date
-- );

-- 6) Add 4 records in the junction table, use subqueries.
-- 		- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- 		- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- 		- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- 		- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

		-- insert into Library (book_fk_id, student_fk_id, borrowed_date) 
		-- values 
		-- (
		-- 	(select book_id from Book where title = 'Alice In Wonderland'), 
		-- 	(select student_id from Student where name = 'John'), 
		-- 	'2022-02-15'
		-- ),
		-- (
		-- 	(select book_id from Book where title = 'To kill a mockingbird'), 
		-- 	(select student_id from Student where name = 'Bob'), 
		-- 	'2021-03-03'
		-- ),
		-- (
		-- 	(select book_id from Book where title = 'Alice In Wonderland'), 
		-- 	(select student_id from Student where name = 'Lera'), 
		-- 	'2021-05-23'
		-- ),
		-- (
		-- 	(select book_id from Book where title = 'Harry Potter'), 
		-- 	(select student_id from Student where name = 'Bob'), 
		-- 	'2021-08-12'
		-- );

-- 7) Display the data
-- 		- Select all the columns from the junction table
		select * 
		from Library;

-- 		- Select the name of the student and the title of the borrowed books
		select s.name, b.title 
		from Library l 
		join Book b on b.book_id = l.book_fk_id
		join Student s on s.student_id = l.student_fk_id;

-- 		- Select the average age of the children, that borrowed the book Alice in Wonderland
		select avg(s.age) 
		from Library l 
		join Book b on b.book_id = l.book_fk_id
		join Student s on s.student_id = l.student_fk_id
		where b.title = 'Alice In Wonderland';

-- 		- Delete a student from the Student table, what happened in the junction table ?
		delete from Student 
		where student_id = 4;

		select * from Library;

		-- Both rows/records that had 'Bob' in them got deleted as well when I deleted the record with the 'student_id' that = 4, which was 'Bob'.
	









