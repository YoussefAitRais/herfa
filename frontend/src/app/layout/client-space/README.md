# Client Space Dashboard

This is a dedicated client space dashboard that provides a simplified workflow for clients to request services from artisans.

## Features

1. **Client Account Selection**
   - Clients can select their account to access the system
   - Clean interface showing all registered clients

2. **Artisan Browsing**
   - View all available artisans with their details
   - See artisan job, location, and description
   - Request services directly from artisan profiles

3. **Service Request Management**
   - View all service requests made by the client
   - Track request status (Pending, Accepted, Refused)
   - Accept or refuse artisan proposals

## Workflow

### 1. Client Selection
- Client selects their account from the list
- System loads client-specific data

### 2. Artisan Browsing
- Client views all available artisans
- Each artisan profile shows:
  - Name
  - Job/Service type
  - Location
  - Description
- Client can request a service from any artisan

### 3. Service Request Process
- Client clicks "Request Service" on an artisan profile
- Request is sent to the artisan (handled by backend)
- Client can view their requests in the "My Requests" section
- When artisan responds, client can accept or refuse the proposal

## Technical Implementation

### Component Structure
- `ClientSpaceComponent` - Main client space component
- Uses Angular standalone components
- TailwindCSS for styling

### Backend Integration
- Connects to existing backend API endpoints
- No changes to backend code required
- All CRUD operations work with existing services

### Data Flow
1. Load all clients and artisans on initialization
2. Client selects their account
3. Client browses artisans and requests services
4. Client manages their service requests

## Routes
- Access the client space at `/client-space`

## Design Principles
1. **Simplicity**: Clean, focused interface for client tasks
2. **Clarity**: Clear workflow from browsing to requesting to managing
3. **Responsiveness**: Works well on different screen sizes
4. **Beginner-Friendly**: Straightforward navigation and actions