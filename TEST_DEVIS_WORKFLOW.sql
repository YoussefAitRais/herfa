-- Test script to verify the devis workflow is working correctly

-- First, let's check if we have artisans and clients in the database
SELECT 'Artisans:' as info;
SELECT id, name, email FROM Artisans;

SELECT 'Clients:' as info;
SELECT id, name, email FROM Clients;

-- Check if there are any existing devis
SELECT 'Existing Devis:' as info;
SELECT id, amount, status, client_id, artisan_id FROM Devis;

-- Insert a test devis request manually to verify the structure
-- This simulates what should happen when a client sends a devis request
INSERT INTO Devis (id, amount, date_devis, status, artisan_id, client_id) VALUES
(1, 2500.00, NOW(), 'PENDING', 1, 1);

-- Check if the devis was inserted correctly
SELECT 'Devis after insert:' as info;
SELECT id, amount, status, client_id, artisan_id FROM Devis;

-- Verify that the artisan can retrieve their devis requests
SELECT 'Devis for Artisan 1:' as info;
SELECT d.id, d.amount, d.status, c.name as client_name 
FROM Devis d 
JOIN Clients c ON d.client_id = c.id 
WHERE d.artisan_id = 1;

-- Verify that the client can retrieve their devis requests
SELECT 'Devis for Client 1:' as info;
SELECT d.id, d.amount, d.status, a.name as artisan_name 
FROM Devis d 
JOIN Artisans a ON d.artisan_id = a.id 
WHERE d.client_id = 1;