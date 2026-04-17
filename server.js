
const express = require('express');
const app = express();
const PORT = 3000;

// Valid codes stored in memory
const VALID_CODES = ['SAVE10', 'GIFT50', 'WELCOME'];

// Endpoint to redeem code
app.get('/redeem', (req, res) => {
    const userCode = req.query.code;

    if (!userCode) {
        return res.status(400).json({ status: 'error', message: 'No code provided' });
    }

    if (VALID_CODES.includes(userCode)) {
        return res.json({ 
            status: 'success', 
            message: `Code ${userCode} redeemed successfully!` 
        });
    } else {
        return res.status(404).json({ 
            status: 'error', 
            message: 'Invalid or expired code' 
        });
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Redeem Server Active. Use /redeem?code=YOUR_CODE');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
