const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Helper functions
function readData(filename) {
    const filePath = path.join(process.cwd(), 'data', filename);
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
        return [];
    }
}

function writeData(filename, data) {
    const filePath = path.join(process.cwd(), 'data', filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Your existing routes and middleware here...

// Export the Express API
module.exports = app;