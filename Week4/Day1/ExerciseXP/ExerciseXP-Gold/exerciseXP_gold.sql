-- Instructions
-- Continuation of the Exercise XP +

-- Select
-- For the following questions, you have to fetch the first_names, last_names and birth_dates of the students.

-- 1) Fetch the first four students. You have to order the four students alphabetically by last_name.
select first_name, last_name, birth_date 
from students 
order by last_name  
limit 4;

-- 2) Fetch the details of the youngest student.
select first_name, last_name, birth_date 
from students 
where birth_date = (
	select max(birth_date) 
	from students
);

-- 3) Fetch three students skipping the first two students.
select first_name, last_name, birth_date 
from students 
offset 2;
