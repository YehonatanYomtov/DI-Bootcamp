-- Queries
-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)


-- SELECT * FROM SecondTab


-- DATA:

-- Table1 – FirstTab
-- ID  Name
-- 5   Pawan
-- 6   Sharlee
-- 7   Krish
-- NULL    Avtaar


-- Table2 – SecondTab
-- ID
-- 5
-- NULL



-- Questions:

-- Q1. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- > A:  0 (doesn't count the null since it is an empty space in memory)


-- Q2. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

--> A:  3 (doesn't count the id that = to 5)


-- Q3. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

--> A: 0 (since null is unknown)


-- Q4. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

--> A: 3 (doesn't count the id that != to null which is 5, therefor the id = 5 won't be counted)