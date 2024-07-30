const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 80;

// Middleware to parse cookies
app.use(cookieParser());

// Middleware to serve static files
const publicServedFilesPath = path.join(__dirname, 'public');
app.use(express.static(publicServedFilesPath));

// Route to set cookies
app.get('/set-cookies', (req, res) => {
    const name = 'vamsi';
    const email = 'sample@gmail.com';
    res.cookie('name', name, { httpOnly: true, path: '/' });
    res.cookie('email', email, { httpOnly: true, path: '/' });
    res.send('Cookies have been set');
});

// Route to get cookies
app.get('/get-cookies', (req, res) => {
    res.json(req.cookies);
});

// Route to handle home
app.get('/home', (req, res) => {
    res.send('Welcome to Home Page');
});

// Route to handle page not found
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
