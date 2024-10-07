app.use(express.json());

app.post('/profile', (req, res) => {
    const { name, title, targetedKeywords, education, certification, contact } = req.body;

    if (!name || !title || !targetedKeywords || !education || !certification || !contact) {
        return res.status(400).send('Error: All fields (name, title, targetedKeywords, education, certification, contact) must be provided.');
    }

    res.status(200).send('Profile received successfully.');
});
