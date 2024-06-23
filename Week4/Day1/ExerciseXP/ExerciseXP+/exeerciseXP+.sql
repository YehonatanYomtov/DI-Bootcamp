-- 1) Fetch all of the data from the table.
select * from students;

-- 2) Fetch all of the students first_names and last_names.
select first_name, last_name from students;

-- 3) For the following questions, only fetch the first_names and last_names of the students.
	-- 	1) Fetch the student which id is equal to 2.
	select first_name, last_name 
	from students 
	where id = 2;

	-- 	2) Fetch the student whose last_name is Benichou AND first_name is Marc.
	select first_name, last_name 
	from students 
	where first_name = 'Marc' 
	and last_name = 'Benichou';

	-- 	3) Fetch the students whose last_names are Benichou OR first_names are Marc.
	select first_name, last_name 
	from students 
	where last_name = 'Benichou' 
	or first_name = 'Marc';

	-- 	4) Fetch the students whose first_names contain the letter a.
	select first_name, last_name 
	from students 
	where first_name like '%e%';

	-- 	5) Fetch the students whose first_names start with the letter a.
	select first_name, last_name 
	from students 
	where first_name ilike 'a%';

	-- 	6) Fetch the students whose first_names end with the letter a.
	select first_name, last_name 
	from students 
	where first_name like '%a';

	-- 	7) Fetch the students whose second to last letter of their first_names are a (Example: Leah).
	select first_name, last_name 
	from students 
	where first_name like '%a_';

	-- 	8) Fetch the students whose id’s are equal to 1 AND 3 .
	select first_name, last_name 
	from students 
	where id in (1, 3);


-- 4) Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
select *
from students 
where birth_date >= '2000-01-01'