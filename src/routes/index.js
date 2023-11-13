const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    app.use('/news', newRouter);
    app.use('/', siteRouter);

    app.get('/', (req, res) => {
        res.render(
            'home.hbs'
        );
    });

    
    app.get('/search', (req, res) => {
        console.log(req.query);
        res.render(
            'search.hbs'
        );
    });

    app.post('/search', (req, res) => {
        res.render(
            'search.hbs'
        );
    });
}

module.exports = route;