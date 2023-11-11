const express = require('express');
const morgan = require('morgan');
const { create }  = require('express-handlebars');
const fs = require('fs');
const path = require('path');
const port = 3000;

const app = express();
const hbs = create({
    /* config */ 
});
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(path.join(__dirname, '..'), 'access.log'), { flags: 'a' });
// setup the logger
app.use(
    morgan('combined', { stream: accessLogStream })
);
// templace engine "EXPRESS-HANDLEBARS"
app.engine('handlebars', hbs.engine);
// Register `app.handlebars` with the Express app.
app.set('view handlebars', 'handlebars');
app.set('views', path.join(__dirname,'resource/views'));
// route 
app.get('/', (req, res) => {
    res.render(
        'home.handlebars'
    );
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});