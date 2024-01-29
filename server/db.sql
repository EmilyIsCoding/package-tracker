CREATE DATABASE package_tracker;

CREATE TABLE packages(
    package_id SERIAL PRIMARY KEY,
    tracking_number VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    status VARCHAR(255),
    est_delivery_date VARCHAR(255) NOT NULL,
    -- est_delivery_date: '2024-01-26T21:15:11Z' do i need to convert this?,
    -- created_at: '2024-01-26T21:15:11Z',
    -- updated_at: '2024-01-26T21:15:11Z',
);