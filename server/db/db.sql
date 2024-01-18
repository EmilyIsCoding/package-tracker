CREATE DATABASE package_tracker;

CREATE TABLE packages(
    package_id SERIAL PRIMARY KEY,
    tracking_number VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);