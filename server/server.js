const express = require("express");
const cors = require("cors");
const pool = require('./db/db');
const path = require('path');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;


//Serve image files
app.use('/images', express.static(path.join(__dirname, 'images')));


// Allow CORS(for frontend)
app.use(cors());

app.use(express.json());

app.get('/api/characters', async(req,res) => {
    try {
        const result = await pool.query('SELECT * FROM characters');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
        
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});