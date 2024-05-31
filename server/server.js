const express = require('express');
const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: {
      origin: '*',
    }
  });
const cors = require('cors');

const app = express();

const port = 3000;

// Track the number of connections for each user
const userConnections = {};

// Enable CORS for all requests
app.use(cors());

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Socket.io connection handling
io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId;

  // Increment connection count for the user
  if (!userConnections[userId]) {
    userConnections[userId] = [];
  }
  userConnections[userId].push(socket.id);
  console.log(`User ${userId} connected (${userConnections[userId].length} connections)`);

  socket.on('logout', () => {
    console.log(`User ${userId} logged out`);
  });

  socket.on('disconnect', () => {
    // Remove socket ID from user's array
    userConnections[userId] = userConnections[userId].filter(id => id !== socket.id);
    console.log(`User ${userId} disconnected (${userConnections[userId].length} connections)`);

    // If no more connections for the user, log disconnect event
    if (userConnections[userId].length === 0) {
      console.log(`User ${userId} disconnected all connections`);
      delete userConnections[userId]; // Remove user from tracking object
    }
  });
});

// Start the server
http.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
