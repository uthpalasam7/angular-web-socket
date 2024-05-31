# angular-web-socket

A simple Angular and Node.js app with WebSocket integration.

## Description

This app provides a basic Angular client with login and dashboard routes, and a Node.js server using Socket.io for real-time communication. User connections, logouts, and disconnections are logged, with disconnections logged only when all user connections are closed.

## Requirements

- Angular CLI version: "~15.2.9"
- Express version: "^4.19.2"

## How to Run

1. **Install Node Modules:** 
   - Navigate to the root, client, and server directories and run `npm install` in each to install the required dependencies.

2. **Start the App:**
   - Run `npm start` in the root directory to start the app.
   - The Angular client will start at `http://localhost:4200/`.
   - The Node.js server will start at `http://localhost:3000/`.

