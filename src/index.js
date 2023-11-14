const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const fs = require('fs');

const app = express();

const route = require('./routes');
const db = require('./config/db');

// connect to db
db.connect();

const path = require('path');
const port = 3000;

// Xử lí sử dụng tệp tĩnh, gắn css, img , .....
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
    path.join(path.join(__dirname, '..'), 'access.log'),
    { flags: 'a' },
);
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));
// templace engine "EXPRESS-HANDLEBARS"
app.engine('hbs', engine({ extname: '.hbs' }));
// Register `app.handlebars` with the Express app.
app.set('view handlebars', '.hbs');
app.set('views', path.join(__dirname, 'resource','views'));

// Route init
route(app);

app.listen(port, () => {
    console.log('------------------------------------------------------');
    console.log(`App:  http://localhost:${port}`);
});
