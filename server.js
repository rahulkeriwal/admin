const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Simple login endpoint (single password)
const ADMIN_PASSWORD = 'Rahul@2006';
app.post('/api/login', (req, res) => {
    const { password } = req.body || {};
    if (password === ADMIN_PASSWORD) return res.json({ ok: true });
    return res.status(401).json({ ok: false, error: 'Invalid password' });
});

app.get('/api/products', (req, res) => {
    const p = path.join(__dirname, 'data', 'products.json');
    try {
        const raw = fs.readFileSync(p, 'utf8');
        const json = JSON.parse(raw);
        return res.json(json);
    } catch (e) {
        return res.status(500).json({ error: 'Failed to read products' });
    }
});

app.listen(PORT, () => console.log(`Swami admin web listening on http://localhost:${PORT}`));
