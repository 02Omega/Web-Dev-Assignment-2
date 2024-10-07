const csv = require('csv-parser');
const fs = require('fs');

app.get('/profiles', (req, res) => {
    const results = [];
    
    fs.createReadStream('profiles.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.status(200).json(results);
        });
});
