
class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news.hbs');
    }
    // [GET] :slag
    show(req, res) {
        res.send('New detail !!!')
    }
}

module.exports = new NewsController;