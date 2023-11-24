const tuyensinhRouter = require('./tuyensinhRouter');

function route(app) {
    app.use('/tuyensinh', tuyensinhRouter);
}

module.exports = route;
