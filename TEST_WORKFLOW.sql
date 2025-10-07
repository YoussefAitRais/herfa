-- Test script to verify the client-to-artisan workflow
-- This script demonstrates how a devis request flows from client to artisan

-- Step 1: Insert a test devis request from client 1 to artisan 1
INSERT INTO devis (amount, date_devis, status, artisan_id, client_id) VALUES 
(2500.00, NOW(), 'PENDING', 1, 1);

-- Step 2: Verify the request was created
SELECT * FROM devis WHERE client_id = 1 AND artisan_id = 1;

-- Step 3: Update the status (simulating artisan response)
UPDATE devis SET status = 'ACCEPTER' WHERE client_id = 1 AND artisan_id = 1;

-- Step 4: Verify the status update
SELECT * FROM devis WHERE client_id = 1 AND artisan_id = 1;

-- Cleanup (optional - remove the test request)
-- DELETE FROM devis WHERE client_id = 1 AND artisan_id = 1 AND amount = 2500.00;