const express = require('express');
const app = express();

app.get('/hello/bilal', (req, res) => {
    res.send('Hello, Bilal');
});

app.listen(3000, () => {
    console.log('Server is running on port 5000');
});
