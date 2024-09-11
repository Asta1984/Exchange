const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route to fetch stock data
app.get('/api/stock-data', async (req, res) => {
    const { ticker, start, end } = req.query;
    const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${start}/${end}?apiKey=${process.env.POLYGON_API_KEY}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
        res.status(500).send('Error fetching data');
    }
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public')); // Assuming your HTML, CSS, and JS files are in a folder named 'public'

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});