-- Schema creation script for Herfa application

-- Create artisans table
CREATE TABLE IF NOT EXISTS Artisans (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),
    email VARCHAR(255),
    job VARCHAR(255),
    location VARCHAR(255),
    name VARCHAR(255),
    password VARCHAR(255),
    phone_number VARCHAR(255)
);

-- Create clients table
CREATE TABLE IF NOT EXISTS Clients (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    name VARCHAR(255),
    password VARCHAR(255),
    phone_number VARCHAR(255)
);

-- Create devis table
CREATE TABLE IF NOT EXISTS Devis (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(19,2),
    date_devis DATETIME,
    status VARCHAR(255),
    artisan_id BIGINT,
    client_id BIGINT,
    FOREIGN KEY (artisan_id) REFERENCES Artisans(id),
    FOREIGN KEY (client_id) REFERENCES Clients(id)
);