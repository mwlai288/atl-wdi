# Clue 1: She is in the Vatican City.
SELECT * FROM country WHERE region = 'Southern Europe' ORDER BY population ASC;

# Clue 2: Italian
SELECT * FROM countrylanguage WHERE countrycode='VAT';

# Clue 3:
SELECT * FROM countrylanguage WHERE percentage = 100;

# Clue 4:
SELECT * FROM city WHERE countrycode='SMR';

# Clue 5:
SELECT * FROM city WHERE name LIKE 'Ser%';
SELECT name FROM country WHERE code = 'BRA';

# Clue 6:
SELECT * FROM city WHERE name LIKE 'Ser%' ;

# Clue 7:
SELECT * FROM city WHERE population = 91084;
