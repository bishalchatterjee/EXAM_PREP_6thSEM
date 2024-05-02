//Write an express code to setup an express server that uses custome middleware for globally on a specific route define a route handler & start the server on port 3002
const express = require('express');
const app = express();
const port = 3002;

// Custom middleware function
const customMiddleware = (req, res, next) => {
  console.log('This is a custom middleware');
  // Do something here if needed
  next(); // Call next to proceed to the next middleware or route handler
};

// Apply custom middleware globally
app.use(customMiddleware);

// Route handler for the root path
app.get('/', (req, res) => {
  res.send('This is the root path handler');
});

// Route handler for the specific route
app.get('/specific-route', (req, res) => {
  res.send('This is the specific route handler');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
