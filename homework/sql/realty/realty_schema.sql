
CREATE TABLE apartments (
    id INT SERIAL PRIMARY KEY,
    apartment INTEGER,
    bedrooms INTEGER,
    bathrooms INTEGER,
    address TEXT NOT NULL,
    tenant VARCHAR
    status BOOLEAN
    square footage INTEGER
    price INTEGER
);

CREATE TABLE offices (
    id SERIAL PRIMARY KEY
    office INTEGER, 
    floors INTEGER
    square footage INTEGER
    cubicles INTEGER
    bathrooms INTEGER
    address TEXT NOT NULL
    company name VARCHAR
    occupied status BOOLEAN
    price INTEGER
);

CREATE TABLE storefront (
    id SERIAL PRIMARY KEY
    address TEXT
    occupied status BOOLEAN
    price INTEGER
    kitchen BOOLEAN
    square footage INTEGER
    owner INTEGER
    outdoor seating BOOLEAN DEFAULT FALSE
    )