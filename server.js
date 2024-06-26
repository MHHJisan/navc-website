const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
