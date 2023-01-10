
# example creates table successfully in PsQl
########################################################################################
# STEP ONE ( is completed already )
<!-- 
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql; 
-->
CREATE TABLE codes
(
  id bigserial NOT NULL PRIMARY KEY,
  agentCode text NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON codes
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

# ##########################################################################


# STEP TWO
CREATE TABLE users
(
  id bigserial NOT NULL PRIMARY KEY,
  firstName text NOT NULL,
  lastName text NOT NULL,
  username text NOT NULL,
  agentCode text NOT NULL,
  persona text NOT NULL,
  password text NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

# STEP THREE
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

SELECT * FROM users WHERE id='3';
('Carson', 'Cook', 'captain', 'testcode', 'admin', 'cook', 'cook1234');
# #########################################################################
# TESTS
## test one
POSTGRESS USERS TABLE
INSERT INTO users (firstName,lastName,username,agentCode,persona,password)
VALUES
('James', 'Bond', 'secret', 'testcode', 'agent','agent123'),
('Super', 'Admin', 'superman', 'testcode', 'admin', 'hero1234'),
('Carson', 'Cook', 'captain', 'testcode', 'admin', 'cook1234'),
('Briton', 'Stender', 'thai', 'testcode', 'admin', 'land1234'),
('Whan', 'Valdez', 'oil', 'testCode', 'merchant', 'tanker123');

INSERT INTO users (firstName,lastName,username,agentCode,persona,password)
VALUES
('Hunter', 'Atkins', 'hunter.a', 'AGL5P7', 'agent','hunter2022'),
('Andrew', 'Anderson', 'andrew.a', 'AGK656', 'agent', 'andrew2022'),
('Shane', 'Sciongry', 'shane.s', 'AGV1K4', 'agent', 'shane2022'),
('Joshua', 'Hogue', 'joshua.h', 'AGE1Q0', 'agent', 'joshua2022'),
('Michael', 'Faught', 'michael.f', 'AGE5Q5', 'agent', 'michael2022'),
('William', 'Valasquez', 'william.v', 'AGE5R5', 'agent', 'william2022');


# ########################33 CREATE TRIGGER ###################################
# STEP ONE ( is completed already )
<!-- 
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql; 
-->

# STEP TWO
CREATE TABLE referrals
(
  id bigserial NOT NULL PRIMARY KEY,
  yourName text NOT NULL,
  referralName text NOT NULL,
  agentName text NOT NULL,
  agentCode text NOT NULL,
  businessName text NOT NULL,  
  phone text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

# STEP THREE
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON referrals
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

# STEP FOUR test
## test one

INSERT INTO referrals (yourName,referralName,agentName,agentCode,businessName,phone,title,description)
 VALUES
 ('Wesley Parr', 'Billy Jack', 'James Bond', 'AGU0W5', 'Protector Services', '9997775555', 'Native Services', 'Foot kicker Slingers');

## test two
 UPDATE referrals 
   SET completed_at = NOW() 
 WHERE referralName = 'Jerry Springer' RETURNING *;

# ###########################################

INSERT INTO referrals (yourName,referralName,agentName,agentCode,businessName,phone,title,description)
 VALUES
 ('Wesley Parr', 'James Conn', 'James Bond', 'AGU0W5', 'ACME GUN SUPPLY', '9997775555', 'Western Flicks', 'Gun Slingers'),
 ('Wesley Parr', 'Billy Bob', 'James Bond', 'AGU0W5', 'ATC CORP', '9997775555', 'How to land an airplane', 'Pilots gone wild!!!'),
 ('Wesley Parr', 'Jerry Sandler', 'James Bond', 'AGU0W5', 'COMEDY CENTRAL', '9997775555', 'Israeli Comedians', 'So funny makes me cry');

## ################################### END OF REFERRALS ################################################
# STEP ONE ( is completed already )
<!-- 
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql; 
-->

# STEP TWO
CREATE TABLE merchants
(
  id bigserial NOT NULL PRIMARY KEY,
  yourName text NOT NULL,
  referralName text NOT NULL,
  agentName text NOT NULL,
  agentCode text NOT NULL,
  businessName text NOT NULL,  
  phone text NOT NULL,
  email text NOT NULL,
  ss text NOT NULL,
  bankName text NOT NULL,
  routingNumber text NOT NULL,
  accountNumber text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  published text NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

# STEP THREE
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON merchants
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();


# TEST 
## test one

INSERT INTO merchants (yourName,referralName,agentName,agentCode,businessName,phone,email,ss,bankName,routingNumber,accountNumber,title,description,published)
 VALUES
 ('Wesley Parr', 'James Conn', 'James Bond', 'tempCode', 'ACME GUN SUPPLY', '9997775555', 'conn@gmail.com', '444556666', 'Wells Fargo', '123000876', '1111222233334444', 'Western Flicks', 'Gun Slingers', false),
 ('Wesley Parr', 'Brendon Frazier', 'James Bond', 'tempCode', 'ACME MUMMY SUPPLY', '9997775555', 'bfrazier@gmail.com', '444556666', 'Wells Fargo', '123000876', '5555222233334444', 'Adventure Movies', 'Adventure Guy', false);

 INSERT SINGLE ITEM TO CHECK TIMESTAMP

# TEST INSERT
# test one
INSERT INTO merchants (yourName,referralName,agentName,agentCode,businessName,phone,email,ss,bankName,routingNumber,accountNumber,title,description,published)
VALUES
('Wesley Parr', 'Jerry Garcia', 'James Bond', 'tempCode', 'HIPPY MUSIC', '9997775555', 'hippy@gmail.com', '444556666', 'Wells Fargo', '123000876', '1111222233334444', 'Acid Music', 'Loyal fan club', false);

## test two
UPDATE merchants 
  SET completed_at = NOW() 
WHERE referralName = 'Jerry Springer' RETURNING *;
# #################################  END MERCHANTS   ######################################################



# ################################# RECORDS ######################################################
Many applications require database timestamps whenever a database record is created or updated. In PostgreSQL, you can track the creation date of a database record by adding a created_at column with a default value of NOW(). But for tracking updates, you need to make use of Postgres triggers.

var record= { yourName: 'Rahul', referralName: 'Rahul', agentName: 'Kumar', email: 'abc@domain.com' };
var record= { (yourName: "Brian James", referralName: "Glen Armstrong", agentName: "Sharon Stone", agentCode: "temCode", businessName: "Spade Junkers", phone: "3334445566", email: "glen@gmail.com", ss: "333547788", bankName: "Sterling", routingNumber: "145000654", accountNumber: "654364757533", title: "car dealer", descriptio: "shady charachter", published: false }

# ######### from referrals api

function find (code) {
  console.log('code %s', code);
  const value = `${code}`;
  const newValue = value.split(' ');
  const lastValue = newValue[0] + newValue[1];
  // console.log('lastValue %s', lastValue);
  // eslint-disable-next-line no-template-curly-in-string
  // const lastlastValue = '\\' + lastValue + \\'';
  // return db.query('SELECT * FROM referrals WHERE agentcode = \'AGU0W5\'');
  // return db.query(`SELECT * FROM referrals WHERE agentcode = ${code}`);
  return db.query('SELECT * FROM referrals WHERE agentcode = $1', [lastValue]);
}
