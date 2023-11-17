const Course = require('../model/Course');
const { mutipleMongooeseToObj } = require('../../util/mongooes');

class MeController {
    // [GET] /me
    index(req, res) {
        res.send('New detail !!!');
    }
    // [GET] /me/store/courses
    async storeCourses(req, res, next) {
        try {
            const CourseQuery = await Course.find({});
            res.render('me/store-courses.hbs', {
                courses: mutipleMongooeseToObj(CourseQuery)
            });
        } catch (error) {
            next(err);
        }
    }
    // [GET] /me/store/news
    storeNews(req, res) {
        res.render('me/store-news.hbs');
    }
}

module.exports = new MeController();
