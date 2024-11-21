-- statements to create & populate simple user TABLE

CREATE TABLE User (
    user_id VARCHAR(10) PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO User 
(user_id, email, firstName, lastName) 
VALUES
('Y1', 'john@yahoo.com', 'John', 'Doe'),
('Y2', 'jane@gmail.com', 'Jane', 'Nguyen');

-- SELECT u.email 
-- FROM User u
-- WHERE u.firstName LIKE "%Jane%"
