const express = require('express'); // Import the Express library
const app = express(); // Create an Express application
const port = 3000; // Define the port number for the server

app.use(express.static('__dirname'))

app.get('/', (req, res) => { // Define a route for the root URL
  res.sendFile( __dirname + '/Home.html'); // Send a response to the client
});

app.get('/About', (req, res) => { // Define a route for the root URL
  res.sendFile(__dirname + '/About.html'); // Send a response to the client
});

app.get('/Contact', (req, res) => { // Define a route for the root URL
  res.sendFile(__dirname + '/contact.html'); // Send a response to the client
});

app.get('/style.css', (req, res) => { // Define a route for the root URL
  res.sendFile(__dirname + '/style.css'); // Send a response to the client
})

app.listen(port, () => { // Start the server and listen on the defined port
  console.log(`Server is running on http://localhost:${port}`); // Log a message to the console
});

