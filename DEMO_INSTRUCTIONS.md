# Herfa Application - Demonstration Instructions

## Prerequisites
1. MySQL database running
2. Backend server (Spring Boot) running on port 8081
3. Frontend application (Angular) running on port 4200

## Demonstration Steps

### Step 1: Verify Sample Data
1. Open your browser and navigate to: `http://localhost:4200/app/client-dashboard/client-demande`
2. You should see a list of 5 artisans:
   - Ahmed Bouazza (Carpenter)
   - Khalid El Mekki (Electrician)
   - Fatima Rachidi (Plumber)
   - Yassine Haddad (Painter)
   - Samira Ouafi (Tiler)

### Step 2: Send a Devis Request
1. Click "Request Devis" on **Ahmed Bouazza**
2. In the modal, enter amount: `2500`
3. Click "Send Request"
4. You should see a success message: "Devis request sent successfully to Ahmed Bouazza!"

### Step 3: View Request as Artisan
1. Open a new browser tab and navigate to: `http://localhost:4200/app/dashboard-artisant`
2. Scroll down to the "My Devis Requests" section
3. You should see the request:
   - Client: Sara Benali
   - Amount: 2500 MAD
   - Status: PENDING (yellow badge)
   - Actions: Accept and Reject buttons

### Step 4: Respond as Artisan
1. Click "Accept" on the request
2. The status should immediately change to ACCEPTED (green badge)
3. The statistics at the top should update:
   - Total Devis: 1
   - Accepted Devis: 1
   - Pending Devis: 0

### Step 5: View Response as Client
1. Go back to the first tab or open a new one
2. Navigate to: `http://localhost:4200/app/devis`
3. You should see the same request with:
   - Status: ACCEPTED (green badge)
   - Actions: "No actions" (since it's already responded to)

## Testing Different Scenarios

### Scenario 1: Reject a Request
1. Send another request from client dashboard
2. Go to artisan dashboard
3. Click "Reject" instead of "Accept"
4. Verify status shows as REFUSED (red badge)

### Scenario 2: Multiple Requests
1. Send requests to different artisans
2. Log in as different artisans to see their specific requests
3. Respond to each request individually

## Key Features Demonstrated

✅ **Real-time Communication**: Requests appear immediately
✅ **Bidirectional Workflow**: Client-to-Artisan and Artisan-to-Client
✅ **Status Management**: PENDING → ACCEPTED/REFUSED
✅ **Data Persistence**: All data stored in MySQL database
✅ **Responsive UI**: Works on desktop and mobile
✅ **Error Handling**: Proper feedback for all actions

## Troubleshooting

If you don't see requests:
1. Check that backend is running on port 8081
2. Verify MySQL is running and accessible
3. Check browser console for any errors
4. Ensure all components are using the same client/artisan IDs

The workflow is fully functional and ready for demonstration with your sample data!