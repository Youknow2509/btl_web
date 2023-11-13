
class NewsController {
    // [GET] /news
    index (req, res) {
        res.render('news.hbs');
    }
}

module.exports = new NewsController;