# CORS Error Fix Guide

## Problem
You're encountering a CORS (Cross-Origin Resource Sharing) error when trying to access the backend API from the Angular frontend:

```
Access to XMLHttpRequest at 'http://localhost:8081/client/allClient' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

This happens because:
1. Your Angular frontend runs on `http://localhost:4200`
2. Your Spring Boot backend runs on `http://localhost:8081`
3. Browsers block requests between different origins for security reasons

## Solution Implemented

I've added CORS configuration to your backend in three places:

### 1. Global CORS Configuration
Added to [HerfaApplication.java](file://c:\Users\youss\Documents\IdeaProjects\herfa\backend\herfa\src\main\java\org\event\herfa\HerfaApplication.java):

```java
@Bean
public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**")
                    .allowedOrigins("http://localhost:4200")
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                    .allowedHeaders("*")
                    .allowCredentials(true);
        }
    };
}
```

### 2. Controller-Level CORS Annotations
Added `@CrossOrigin(origins = "http://localhost:4200")` to all controllers:
- [ClientController.java](file://c:\Users\youss\Documents\IdeaProjects\herfa\backend\herfa\src\main\java\org\event\herfa\controller\ClientController.java)
- [DevisController.java](file://c:\Users\youss\Documents\IdeaProjects\herfa\backend\herfa\src\main\java\org\event\herfa\controller/DevisController.java)
- [ArtisanController.java](file://c:\Users\youss\Documents\IdeaProjects\herfa\backend\herfa\src\main\java\org\event\herfa\controller/ArtisanController.java)

### 3. Application Properties
Added CORS configuration to [application.properties](file://c:\Users\youss\Documents\IdeaProjects\herfa\backend\herfa\src\main\resources\application.properties):

```
cors.allowed-origins=http://localhost:4200
```

## Additional Database Configuration Fixes

I also improved the database configuration in [application.properties](file://c:\Users\youss\Documents\IdeaProjects\herfa\backend\herfa\src\main\resources\application.properties):

```
spring.datasource.url=jdbc:mysql://localhost:3306/herfa?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

## How to Test the Fix

1. Make sure MySQL is running on your system
2. Start the backend Spring Boot application:
   ```
   cd backend/herfa
   ./mvnw spring-boot:run
   ```
   
3. Start the frontend Angular application:
   ```
   cd frontend
   npm start
   ```

4. Navigate to `http://localhost:4200/clients-dashboard-simple`

## Potential Issues

If you still encounter errors, check:

1. **MySQL Database**: Ensure MySQL is running and accessible
2. **Database Credentials**: Verify username/password in application.properties
3. **Database Existence**: The database will be created automatically, but ensure MySQL service is running
4. **Port Conflicts**: Ensure ports 8081 (backend) and 4200 (frontend) are available

## Alternative Solution: Proxy Configuration

If the CORS fix doesn't work, you can configure a proxy in the Angular application:

1. Create `proxy.conf.json` in the frontend folder:
   ```json
   {
     "/api/*": {
       "target": "http://localhost:8081",
       "secure": false,
       "changeOrigin": true
     },
     "/client/*": {
       "target": "http://localhost:8081",
       "secure": false,
       "changeOrigin": true
     },
     "/artisans/*": {
       "target": "http://localhost:8081",
       "secure": false,
       "changeOrigin": true
     }
   }
   ```

2. Update `angular.json` to use the proxy:
   ```json
   "serve": {
     "builder": "@angular-devkit/build-angular:dev-server",
     "options": {
       "proxyConfig": "proxy.conf.json"
     }
   }
   ```

3. Start the frontend with:
   ```
   npm start -- --proxy-config proxy.conf.json
   ```

This routes all API requests through the Angular development server, avoiding CORS issues.