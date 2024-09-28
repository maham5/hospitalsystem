// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // for password hashing
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your MySQL username
    password: '', // replace with your MySQL password
    database: 'hospital', // replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL connected');
});

// POST endpoint to add a patient
app.post('/api/patients', (req, res) => {
    const {
        fname, lname, dob, sex, city, postal_code,
        phone_home, email, occupation, race, ethnicity,
        religion, family_size, monthly_income
    } = req.body;

    const sql = `
        INSERT INTO patient_data 
        (fname, lname, dob, sex, city, postal_code, 
        phone_home, email, occupation, race, 
        ethnicity, religion, family_size, monthly_income) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        
    db.query(sql, [
        fname, lname, dob, sex, city, postal_code,
        phone_home, email, occupation, race,
        ethnicity, religion, family_size, monthly_income
    ], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Error inserting data' });
        }
        res.status(201).json({
            id: result.insertId,
            fname, lname, dob, sex, city, postal_code,
            phone_home, email, occupation, race,
            ethnicity, religion, family_size, monthly_income
        });
    });
});

// GET endpoint to retrieve patients
app.get('/api/patients', (req, res) => {
    db.query('SELECT * FROM patient_data', (err, results) => {
        if (err) {
            console.error('Error retrieving patients:', err);
            return res.status(500).json({ message: 'Error retrieving patients' });
        }
        res.json(results);
    });
});

// POST endpoint for user login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    const sql = `SELECT * FROM users_secure WHERE username = ?`;
    db.query(sql, [username], async (err, results) => {
        if (err) {
            console.error('Error logging in:', err);
            return res.status(500).json({ message: 'Error logging in' });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful', userId: user.id });
    });
});
// POST endpoint for user registration
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
            INSERT INTO users_secure (username, password) 
            VALUES (?, ?)`;

        db.query(sql, [username, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error registering user:', err); // Log error
                return res.status(500).json({ message: 'Error registering user', error: err.message }); // Return detailed error
            }
            res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
        });
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({ message: 'Server error during registration', error: error.message });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

