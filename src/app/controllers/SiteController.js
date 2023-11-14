const Course = require('../model/Course');

class SiteController {
    // [GET] /home
    async index(req, res) {
        //res.render('home.hbs');
        try {
            const result = await Course.find({});
            res.json(result); // Handle the result as needed
        } catch (error) {
            res.status(400).json({ error: 'Err !!!' }); // Handle any errors that occurred during the query
        }
    }
    // [GET] /search
    search(req, res) {
        res.render('search.hbs');
    }
}

module.exports = new SiteController();
