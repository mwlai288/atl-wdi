# Clue 1: She is in the Vatican City.
SELECT * FROM country WHERE region = 'Southern Europe' ORDER BY population ASC;

# Clue 2: Italian
SELECT * FROM countrylanguage WHERE countrycode='VAT';

# Clue 3:
SELECT * FROM countrylanguage WHERE percentage = 100;

# Clue 4:
SELECT * FROM city WHERE countrycode='SMR';
