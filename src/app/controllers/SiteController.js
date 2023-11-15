const Course = require('../model/Course');
const { mutipleMongooeseToObj } = require('../../util/mongooes');
class SiteController {
    // [GET] /home
    async index(req, res, next) {
        //res.render('home.hbs');
        try {
            const courses = await Course.find({});
            res.render('home.hbs', {
                courses: mutipleMongooeseToObj(courses),
            }); // Handle the result as needed
        } catch (error) {
            next(err);
        }
    }
    // [GET] /search
    search(req, res) {
        res.render('search.hbs');
    }
}

module.exports = new SiteController();
