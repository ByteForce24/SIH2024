const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { initializeApp, applicationDefault } = require('firebase-admin/app');
// const { getDatabase } = require('firebase-admin/database');

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser()); // Use cookie-parser middleware

// Initialize Firebase Admin SDK
initializeApp({
  credential: applicationDefault(),
  databaseURL: 'https://rajasthanalumniconnect-default-rtdb.firebaseio.com'
});

// Get a reference to the Realtime Database
// const database = getDatabase();

// Import routes
const userRoutes = require('./routes/userRoutes'); // Adjust path as needed

// Use routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
