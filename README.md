# React Authentication System

A modern authentication system with signup and login functionality built with React.

## Features

- User registration with secure password hashing
- User login with JWT authentication
- React-based frontend with component architecture
- Backend API for authentication
- Responsive design

## Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Authentication**: JWT and bcrypt

## Setup and Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   This will start both the backend server and React development server.

4. For production build:
   ```
   npm run build
   npm start
   ```

## API Endpoints

- `POST /api/signup` - Register a new user
  - Request Body: `{ "username": "example", "password": "password123" }`
  - Response: `{ "message": "User registered successfully" }`

- `POST /api/login` - Login with username and password
  - Request Body: `{ "username": "example", "password": "password123" }`
  - Response: `{ "message": "Login successful", "token": "jwt_token_here", "user": { "id": 1, "username": "example" } }`

## Deployment on Render

1. Push this repository to GitHub
2. Log in to Render and create a new Web Service
3. Connect your GitHub repository
4. Use the following settings:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
5. Add environment variables if needed (like JWT_SECRET)
6. Deploy!

## Created By

Javan Meshack - Test Project
