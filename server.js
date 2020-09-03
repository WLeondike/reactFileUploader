const express = requre('express');
const fileUpload = require('express-fileUpload');

const app = express();

app.use(fileUpload());

//Uplodad Endpoint
app.post('/upload', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json();
    });
});

app.listen(5000, () => console.log('App listening on PORT: http://localhost:5000'))