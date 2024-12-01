CREATE DATABASE IF NOT EXISTS PizzaDB;

USE team03;

CREATE TABLE DRIVER (
    driver_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    application_status BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES User(id)
);
CREATE TABLE ADMIN (
    admin_id INT,
    PRIMARY KEY (admin_id),
    FOREIGN KEY (admin_id) REFERENCES User(id)
);

CREATE TABLE SPONSOR (
    sponsor_id INT,
    pointConversionRate DECIMAL(10, 2),
    numOfDrivers INT,
    PRIMARY KEY (sponsor_id),
    FOREIGN KEY (sponsor_id) REFERENCES User(id)
);

ALTER TABLE User
ADD COLUMN user_type ENUM('admin', 'driver', 'sponsor', 'sponsor', 'sponsor_org');

CREATE TABLE INVOICE (
    invoice_id INT AUTO_INCREMENT PRIMARY KEY,
    pointsSpent INT NOT NULL,
    conversionRate DECIMAL(10, 2) NOT NULL,
    USDspent DECIMAL(10, 2) NOT NULL,
    sponsor_id INT NOT NULL,
    driver_id INT NOT NULL,
    FOREIGN KEY (sponsor_id) REFERENCES SPONSOR(sponsor_id),
    FOREIGN KEY (driver_id) REFERENCES DRIVER(driver_id)
);


CREATE TABLE POINT_HISTORY (
    driver_id INT NOT NULL,
    sponsor_id INT NOT NULL,
    addOrSub CHAR(3) NOT NULL,
    amount INT NOT NULL,
    reason VARCHAR(255),
    time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,  -- Changed from TIME to 
    PRIMARY KEY (driver_id, sponsor_id),  -- Composite primary key 
    FOREIGN KEY (driver_id) REFERENCES DRIVER(driver_id),
    FOREIGN KEY (sponsor_id) REFERENCES SPONSOR(sponsor_id)
);


ALTER TABLE SPONSOR ADD COLUMN firstName VARCHAR(255);
ALTER TABLE SPONSOR ADD COLUMN lastName VARCHAR(255);
ALTER TABLE SPONSOR ADD COLUMN email VARCHAR(255);

ALTER TABLE ADMIN ADD COLUMN firstName VARCHAR(255);
ALTER TABLE ADMIN ADD COLUMN lastName VARCHAR(255);
ALTER TABLE ADMIN ADD COLUMN email VARCHAR(255);

ALTER TABLE DRIVER ADD COLUMN firstName VARCHAR(255);
ALTER TABLE DRIVER ADD COLUMN lastName VARCHAR(255);
ALTER TABLE DRIVER ADD COLUMN email VARCHAR(255);


ALTER TABLE DRIVER
ADD CONSTRAINT fk_driver_user_id FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE;

ALTER TABLE SPONSOR
ADD CONSTRAINT fk_sponsor_user_id FOREIGN KEY (sponsor_id) REFERENCES User(id) ON DELETE CASCADE;

ALTER TABLE ADMIN
ADD CONSTRAINT fk_admin_user_id FOREIGN KEY (admin_id) REFERENCES User(id) ON DELETE CASCADE;

ALTER TABLE DRIVER DROP FOREIGN KEY fk_driver_user_id;

ALTER TABLE SPONSOR DROP FOREIGN KEY fk_sponsor_user_id;

ALTER TABLE ADMIN DROP FOREIGN KEY fk_admin_user_id;

CREATE TABLE SPONSOR_DRIVER (
    sponsor_id INT,
    driver_id INT,
    sponsor_driver_point_balance INT NOT NULL DEFAULT 0,
    PRIMARY KEY (sponsor_id, driver_id),
    FOREIGN KEY (sponsor_id) REFERENCES SPONSOR(sponsor_id) ON DELETE CASCADE,
    FOREIGN KEY (driver_id) REFERENCES DRIVER(driver_id) ON DELETE CASCADE
);

UPDATE SPONSOR_DRIVER 
    SET sponsor_driver_point_balance = sponsor_driver_point_balance + 50
    WHERE sponsor_id = 1 AND driver_id = 4

INSERT INTO POINT_HISTORY (driver_id, sponsor_id, addOrSub, amount, reason)
VALUES (4, 1, 'add', 50, 'completed a successful delivery');
