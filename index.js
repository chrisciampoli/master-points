// Imports
const express      = require('express');
const Registration = require('./src/Controller/RegistrationController');

// Setup & Settings
const app  = express();
const port = 3000;

// Inits
const register = new Registration();

app.listen(port, () => {
    console.log(`http://localhost:${port} is ready for work boss!`);
});

// Routes
app.get('/', register(req, res));