-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns


-- Get all information about all authors
SELECT * FROM authors;
-- Get just the name and birth year of all authors
<<<<<<< HEAD
SELECT name, birth_year FROM authors;
-- Get all authors born in the 20th centruy or later
SELECT * FROM authors WHERE birth_year >= 1900;
-- Get all authors born in the USA
SELECT * FROM authors WHERE nationality = 'United Sates of America';
-- Get all books published on 1985
SELECT * FROM books WHERE publication_date = 1985;
=======

-- Get all authors born in the 20th century or later

-- Get all authors born in the USA

-- Get all books published in 1985

>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37
-- Get all books published before 1989

-- Get just the title of all books.
SELECT title FROM books;
-- Get just the year that 'A Dance with Dragons' was published

-- Cry when you realize how long it's been

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * FROM books WHERE title LIKE '%the%';
-- Add yourself as an author

-- Add two books that you'd like to write (you can hard-code your id as the author id)

-- Update one of your books to have a new title

-- Delete your books

-- Delete your author entry
