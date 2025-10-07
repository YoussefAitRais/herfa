# Herfa Application Workflow Demonstration

This document explains how to demonstrate the complete client-to-artisan workflow using the sample data.

## Sample Data

### Clients (ID 1-5):
1. Sara Benali (client123) - +212612345678
2. Hamza Elalami (client456) - +212677889900
3. Nour Zahraoui (client789) - +212698745632
4. Youssef Karim (passclient) - +212665887744
5. Amina Mouline (mypassword) - +212699112233

### Artisans (ID 1-5):
1. Ahmed Bouazza (artisan123) - Carpenter - Casablanca
2. Khalid El Mekki (artisan456) - Electrician - Rabat
3. Fatima Rachidi (artisan789) - Plumber - Marrakech
4. Yassine Haddad (paintme) - Painter - Fès
5. Samira Ouafi (tilerpass) - Tiler - Tanger

## Demonstration Workflow

### Step 1: Client Sends Devis Request

1. Navigate to: `/app/client-dashboard/client-demande`
2. You'll see a list of all 5 artisans
3. Click "Request Devis" on any artisan (e.g., Ahmed Bouazza)
4. Enter an amount (e.g., 2500) and click "Send Request"
5. Success message confirms the request was sent

### Step 2: Artisan Receives and Responds to Request

1. Navigate to artisan dashboard: `/app/dashboard-artisant`
2. In the "My Devis Requests" section, you'll see the new request
3. The request shows:
   - Client name (Sara Benali)
   - Amount (2500 MAD)
   - Status (PENDING)
4. Click "Accept" or "Reject" to respond to the request
5. Status updates immediately in the dashboard

### Step 3: Client Sees Response

1. Navigate to: `/app/devis`
2. Client sees all received devis requests
3. Status shows as ACCEPTED or REFUSED based on artisan's response

## Current Configuration

All components are configured to work with:
- Client ID: 1 (Sara Benali)
- Artisan ID: 1 (Ahmed Bouazza)

This means when you test the workflow:
- Requests sent from client dashboard will appear in artisan dashboard
- Responses from artisan will appear in client's devis page

## Testing Different Clients/Artisans

To test with different clients/artisans:
1. Update the `clientId` variable in the component files
2. Update the `artisanId` variable in the artisan dashboard component
3. Restart the application

For example:
- To test as Hamza Elalami (client ID 2): Set `clientId = 2`
- To test as Khalid El Mekki (artisan ID 2): Set `artisanId = 2`