-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists cats;



CREATE table cats (
id BIGINT GENERATED ALWAYS AS IDENTITY,
cat_name VARCHAR NOT NULL,
cat_type VARCHAR NOT NULL, 
cat_url VARCHAR NOT NULL,
cat_year INT NOT NULL,
lives INT NOT NULL,
isSidekick BOOLEAN NOT NULL
);


INSERT INTO cats (cat_name, cat_type, cat_url, cat_year,lives, isSidekick ) VALUES 
('Felix', 'Tuxedo', 'https://static.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg', 1892, 3, false );



