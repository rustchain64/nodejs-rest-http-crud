 example creates table successfully in PsQl
CREATE TABLE users
(
  id bigserial NOT NULL,
  firstName text NOT NULL,
  lastName text NOT NULL,
  username text NOT NULL,
  agentCode text NOT NULL,
  persona text NOT NULL,
  hash text NOT NULL,
  password text NOT NULL,
  CONSTRAINT user_pkey PRIMARY KEY (id)
);


    persona: { type: String, required: true },
    agentCode: { type: String, optional: true },
    username: { type: String, unique: true, required: true },
   
    hash: { type: String, required: true },
   
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }


SELECT * FROM users WHERE id='3'
('Carson', 'Cook', 'captain', 'testcode', 'admin', 'cook', 'cook1234'),
# #########################################################################
POSTGRESS USERS TABLE
INSERT INTO users (firstName,lastName,username,agentCode,persona,hash,password)
VALUES
('James', 'Bond', 'secret', 'testcode', 'agent', 'agent','agent123'),
('Super', 'Admin', 'superman', 'testcode', 'admin', 'hero123', 'hero1234'),
('Carson', 'Cook', 'captain', 'testcode', 'admin', 'cook', 'cook1234'),
('Briton', 'Stender', 'thai', 'testcode', 'admin', 'land', 'land1234'),
('Whan', 'Valdez', 'oil', 'testCode', 'admin', 'tanker', 'tanker1234');

INSERT INTO users (firstName,lastName,username,agentCode,persona,hash,password)
VALUES
('Peter', 'Sellers', 'funny', 'testCode', 'merchant', 'fun', 'fun123');
