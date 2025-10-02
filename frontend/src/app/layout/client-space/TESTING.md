# Testing the Client Space Dashboard

## Prerequisites

1. Ensure the backend Spring Boot application is running on `http://localhost:8081`
2. Ensure the MySQL database is properly configured and accessible
3. Ensure the frontend Angular application can be built without errors

## How to Test

### 1. Build the Application
```bash
cd frontend
npm run build
```

If the build is successful, you should see output similar to:
```
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.
```

### 2. Run the Development Server
```bash
cd frontend
npm start
```

Navigate to `http://localhost:4200/client-space` to access the client space dashboard.

### 3. Test the Workflow

#### Client Selection
1. On the client space page, you should see a list of clients
2. Click on any client to select their account

#### Artisan Browsing
1. After selecting a client, you should see a list of available artisans
2. Each artisan card should display:
   - Name
   - Job/Service type
   - Location
   - Description

#### Service Request
1. Click the "Request Service" button on any artisan card
2. You should see a success message
3. Click "My Requests" to view your service requests

#### Request Management
1. In the "My Requests" view, you should see your service requests
2. Pending requests should have "Accept" and "Refuse" buttons
3. Test accepting and refusing requests

## Troubleshooting

### Build Errors
If you encounter build errors:

1. **Self-closing tag errors**: 
   - Ensure all HTML tags are properly closed
   - `<div />` should be `<div></div>`

2. **Component import errors**:
   - Verify all required modules are imported in the component
   - Check that the component is properly exported

3. **Template errors**:
   - Check for syntax errors in the HTML template
   - Ensure all Angular directives are properly formatted

### Runtime Errors
If the application builds but doesn't work correctly:

1. **CORS errors**:
   - Ensure the backend has proper CORS configuration
   - Check that the frontend and backend are on compatible ports

2. **Database connection errors**:
   - Verify MySQL is running
   - Check database credentials in application.properties
   - Ensure the database exists or can be created

3. **API errors**:
   - Check browser developer tools Network tab
   - Verify all API endpoints are accessible
   - Ensure the backend services are running correctly

## Expected Behavior

### Successful Client Selection
- Client list should load and display correctly
- Clicking a client should navigate to the artisan list view

### Successful Artisan Browsing
- Artisan list should load and display correctly
- Each artisan should show their details
- "Request Service" buttons should be functional

### Successful Service Request
- Clicking "Request Service" should send a request to the backend
- Success message should be displayed
- Request should appear in "My Requests" view

### Successful Request Management
- Service requests should display with correct status
- Pending requests should have action buttons
- Accepting/refusing requests should update the status correctly

## Common Issues and Solutions

### 1. Template Parse Errors
**Problem**: `NG5002: Only void, custom and foreign elements can be self closed`
**Solution**: Ensure all HTML tags are properly closed with separate opening and closing tags

### 2. Module Import Errors
**Problem**: Component not found or not imported correctly
**Solution**: Verify all required modules are in the imports array of the component decorator

### 3. CORS Errors
**Problem**: Access to XMLHttpRequest blocked by CORS policy
**Solution**: Ensure backend has proper CORS configuration for localhost:4200

### 4. Database Connection Errors
**Problem**: Unable to connect to MySQL database
**Solution**: Verify MySQL is running and credentials are correct in application.properties