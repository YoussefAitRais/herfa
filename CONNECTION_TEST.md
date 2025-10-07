# Herfa Application - Client to Artisan Connection Test

## Current Setup

The application is configured with the following default IDs:
- **Client ID**: 1 (Sara Benali)
- **Artisan ID**: 1 (Ahmed Bouazza)

## How the Connection Works

### 1. Client Sends Request
When a client sends a devis request:
1. Client navigates to `/app/client-dashboard/client-demande`
2. Selects an artisan and enters amount
3. Request is sent to backend API: `POST /api/devis/send`
4. Request is stored in database with:
   - `clientId = 1` (Sara Benali)
   - `artisanId = 1` (Ahmed Bouazza)
   - `status = PENDING`

### 2. Artisan Receives Request
When artisan checks their dashboard:
1. Artisan navigates to `/app/dashboard-artisant`
2. Dashboard calls backend API: `GET /artisans/1/devis`
3. Backend returns all devis requests where `artisanId = 1`
4. Artisan sees the request from Sara Benali

### 3. Artisan Responds
When artisan responds to request:
1. Artisan clicks "Accept" or "Reject"
2. Dashboard calls backend API: `PUT /api/devis/{id}/status?status=ACCEPTER`
3. Backend updates the request status in database

### 4. Client Sees Response
When client checks their devis page:
1. Client navigates to `/app/devis`
2. Page calls backend API: `GET /client/1/devis`
3. Backend returns all devis requests where `clientId = 1`
4. Client sees the updated status

## Sample Data Flow

```
Client (ID: 1) --> Request Devis --> Artisan (ID: 1)
         ↓
    [Database: Devis Table]
    - id: 1
    - clientId: 1 (Sara Benali)
    - artisanId: 1 (Ahmed Bouazza)
    - amount: 2500
    - status: PENDING
         ↓
Artisan (ID: 1) <-- Receives Request <-- Client (ID: 1)
         ↓
Artisan Updates Status --> ACCEPTED/REFUSED
         ↓
Client (ID: 1) <-- Sees Updated Status <-- Artisan (ID: 1)
```

## Testing the Connection

To verify the connection works:

1. **Send a Request**:
   - Navigate to Client Dashboard → Demand Devis
   - Click "Request Devis" on Ahmed Bouazza
   - Enter amount and send

2. **Check Artisan Dashboard**:
   - Navigate to Artisan Dashboard
   - Verify request appears in "My Devis Requests"
   - Status should be "PENDING"

3. **Respond to Request**:
   - Click "Accept" or "Reject" on the request
   - Verify status updates immediately

4. **Check Client Devis Page**:
   - Navigate to `/app/devis`
   - Verify the same request appears with updated status

This demonstrates the complete bidirectional communication between clients and artisans through the Herfa platform.