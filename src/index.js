
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const fs = require('fs');

const app = express();

const route = require('./routes');
const db = require('./config/db');
const method_override = require('method-override');


// override with POST having ?_method=DELETE
app.use(method_override('_method'));

// connect to db
db.connect();

const path = require('path');
const port = 3000;

// Xử lí sử dụng tệp tĩnh, gắn css, img , .....
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
    path.join(path.join(__dirname, '..'), 'access.log'),
    { flags: 'a' },
);
// setup the logger
// app.use(morgan('combined', { stream: accessLogStream }));

// templace engine "EXPRESS-HANDLEBARS"
app.engine('hbs', engine({ 
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    },
}));
// Register `app.handlebars` with the Express app.
app.set('view handlebars', '.hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log('------------------------------------------------------');
    console.log('------------------------------------------------------');
    const date = new Date();
    console.log(`--------------------  Now: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `);
    console.log(`--------------------  Sever:  http://localhost:${port} `);
    console.log('------------------------------------------------------');
    console.log('------------------------------------------------------');
});
