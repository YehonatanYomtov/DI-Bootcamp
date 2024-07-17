-- CREATE TABLE books (
--     book_id VARCHAR(100) PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     description TEXT,
--     authors VARCHAR(255),
--     genre VARCHAR(100),
--     published_date DATE,
--     language VARCHAR(50),
--     page_count INTEGER,
--     cover_image_url TEXT,
--     publisher VARCHAR(255),
--     avg_rating NUMERIC(3, 2),
--     maturity_rate VARCHAR(20),
--     buying_price INTEGER,
--     selling_price INTEGER,
--     amount_total INTEGER DEFAULT 1,
--     amount_available INTEGER DEFAULT 1
-- );

-- CREATE TABLE customers (
--     customer_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(255) NOT NULL,
--     last_name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     phone VARCHAR(20)	
--);

-- insert into books (title, author, publisher, publishedDate, description, pageCount, genre, averageRating, maturityRating, smallThumbnail, price, bookLanguage, stock)
-- values ('Harry Popy', 'asdsads', 'Adadgdfgdfgfdgdsads', '2000-03-14', 'Hi there this is the discription dasdadasdasdasdasfsdgfheregd', 255, 'Action', 4.5, 'Not Mature', '//', 10.5, 'English', 20);

-- ALTER TABLE customers
-- ADD COLUMN purchases_list VARCHAR(100)[]

-- select * from books;
-- select * from customers;
select * from seller;


