const fs = require('fs');

app.post('/profile', (req, res) => {
    const { name, title, targetedKeywords, education, certification, contact } = req.body;

    if (!name || !title || !targetedKeywords || !education || !certification || !contact) {
        return res.status(400).send('Error: Missing required fields.');
    }

    const profile = {
        name, title, targetedKeywords, education, certification, contact
    };

    fs.readFile('profiles.json', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }

        let profiles = [];
        if (data.length) {
            profiles = JSON.parse(data);
        }
        profiles.push(profile);

        fs.writeFile('profiles.json', JSON.stringify(profiles, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving profile');
            }
            res.status(200).send('Profile saved successfully.');
        });
    });
});
