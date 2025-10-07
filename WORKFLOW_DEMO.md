# Herfa Application - Client to Artisan Workflow

## Your Sample Data is Ready to Use

The application is pre-configured with your sample data:

### Clients (ID 1-5):
1. **Sara Benali** - sara.benali@example.com - +212612345678
2. **Hamza Elalami** - hamza.elalami@example.com - +212677889900
3. **Nour Zahraoui** - nour.zahraoui@example.com - +212698745632
4. **Youssef Karim** - youssef.karim@example.com - +212665887744
5. **Amina Mouline** - amina.mouline@example.com - +212699112233

### Artisans (ID 1-5):
1. **Ahmed Bouazza** - Carpenter - Casablanca
2. **Khalid El Mekki** - Electrician - Rabat
3. **Fatima Rachidi** - Plumber - Marrakech
4. **Yassine Haddad** - Painter - Fès
5. **Samira Ouafi** - Tiler - Tanger

## How to Demonstrate the Complete Workflow

### Step 1: Start the Application
1. Start the backend server (Spring Boot)
2. Start the frontend application (Angular)
3. Database will automatically populate with your sample data

### Step 2: Send a Devis Request (Client Side)
1. Navigate to: `http://localhost:4200/app/client-dashboard/client-demande`
2. You'll see a list of all 5 artisans
3. Click "Request Devis" on **Ahmed Bouazza** (ID=1)
4. Enter an amount (e.g., 2500) in the modal
5. Click "Send Request"
6. You'll see a success message

### Step 3: Receive and Respond (Artisan Side)
1. Navigate to: `http://localhost:4200/app/dashboard-artisant`
2. In the "My Devis Requests" section, you'll see:
   - Request from **Sara Benali** (ID=1)
   - Amount: 2500 MAD
   - Status: PENDING (yellow badge)
3. Click "Accept" or "Reject" to respond
4. Status will update immediately (green for accepted, red for rejected)

### Step 4: View Response (Client Side)
1. Navigate to: `http://localhost:4200/app/devis`
2. You'll see the same request with updated status:
   - ACCEPTED (green badge) or REFUSED (red badge)
   - No action buttons (shows "No actions")

## Testing Different Combinations

To test with different clients/artisans:

### Test as Different Client:
1. Edit `client-demande.component.ts`
2. Change `clientId` from 1 to another ID (2-5)
3. Restart frontend application

### Test as Different Artisan:
1. Edit `dashboard-artisant.component.ts`
2. Change `artisanId` from 1 to another ID (2-5)
3. Restart frontend application

## Key Features Demonstrated

✅ **Client-to-Artisan Communication**
✅ **Real-time Status Updates**
✅ **Bidirectional Workflow**
✅ **Sample Data Integration**
✅ **Responsive UI with TailwindCSS**
✅ **Error Handling and User Feedback**

The workflow is fully functional and ready for demonstration with your exact sample data!