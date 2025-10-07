-- Sample data initialization script for Herfa application
-- This script populates the database with sample artisans and clients

-- Clear existing data (if any)
DELETE FROM devis;
DELETE FROM artisans;
DELETE FROM clients;

-- Reset auto-increment counters
ALTER TABLE artisans AUTO_INCREMENT = 1;
ALTER TABLE clients AUTO_INCREMENT = 1;
ALTER TABLE devis AUTO_INCREMENT = 1;

-- Insert sample artisans
INSERT INTO artisans (id, description, email, job, location, name, password) VALUES
(1, 'Experienced carpenter specializing in custom furniture.', 'ahmed.bouazza@example.com', 'Carpenter', 'Casablanca', 'Ahmed Bouazza', 'artisan123'),
(2, 'Professional electrician with 10 years of experience.', 'khalid.elmekki@example.com', 'Electrician', 'Rabat', 'Khalid El Mekki', 'artisan456'),
(3, 'Expert plumber available for home and commercial services.', 'fatima.rachidi@example.com', 'Plumber', 'Marrakech', 'Fatima Rachidi', 'artisan789'),
(4, 'Painter passionate about modern and traditional designs.', 'yassine.haddad@example.com', 'Painter', 'Fès', 'Yassine Haddad', 'paintme'),
(5, 'Tile specialist with precision and creativity.', 'samira.ouafi@example.com', 'Tiler', 'Tanger', 'Samira Ouafi', 'tilerpass');

-- Insert sample clients
INSERT INTO clients (id, email, name, password, phone_number) VALUES
(1, 'sara.benali@example.com', 'Sara Benali', 'client123', '+212612345678'),
(2, 'hamza.elalami@example.com', 'Hamza Elalami', 'client456', '+212677889900'),
(3, 'nour.zahraoui@example.com', 'Nour Zahraoui', 'client789', '+212698745632'),
(4, 'youssef.karim@example.com', 'Youssef Karim', 'passclient', '+212665887744'),
(5, 'amina.mouline@example.com', 'Amina Mouline', 'mypassword', '+212699112233');

-- Sample devis requests (optional - can be created through the application)
-- INSERT INTO devis (id, amount, date_devis, status, artisan_id, client_id) VALUES
-- (1, 2500.00, '2025-10-05 10:00:00', 'PENDING', 1, 1),
-- (2, 1800.00, '2025-10-05 11:00:00', 'ACCEPTER', 2, 1);