CREATE DATABASE package_tracker;

CREATE TABLE packages(
    package_id SERIAL PRIMARY KEY,
    tracking_number VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    status VARCHAR(255),
    est_delivery_date VARCHAR(255) NOT NULL,
);

-- Should I have another column to checkbox if they actually received it?