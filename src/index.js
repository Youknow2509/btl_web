const express = require('express');
const morgan = require('morgan');
const { engine }  = require('express-handlebars');
const fs = require('fs');
const path = require('path');
const port = 3000;

const app = express();
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(path.join(__dirname, '..'), 'access.log'), { flags: 'a' });
// setup the logger
app.use(
    morgan('combined', { stream: accessLogStream })
);
// templace engine "EXPRESS-HANDLEBARS"
app.engine('hbs', engine({extname: '.hbs'}));
// Register `app.handlebars` with the Express app.
app.set('view handlebars', '.hbs');
app.set('views', path.join(__dirname,'resource/views'));
// route 
app.get('/', (req, res) => {
    res.render(
        'home.hbs'
    );
});
app.get('/news', (req, res) => {
    res.render(
        'news.hbs'
    );
}); 
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});