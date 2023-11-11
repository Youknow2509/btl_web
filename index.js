const express = require('express');
const morgan = require('morgan');

const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
 
// setup the logger
app.use(
    morgan('combined', { stream: accessLogStream })
);

// route 
app.get('/home', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});