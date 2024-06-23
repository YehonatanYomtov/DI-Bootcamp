-- Instructions
-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
select count(*) 
from actors;
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- A 'syntax error' will accure, meaning since we created the table 'actors' and the 'fields' where set to: NOT NULL, it won't allow us to not insert nothing (which is null) as a value. 