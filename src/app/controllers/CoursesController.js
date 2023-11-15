const Course = require('../model/Course');
const { mongooeseToObj } = require('../../util/mongooes');
class CoursesController {
    // [GET] courses/:slug
    async show(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            res.render('./courses/show.hbs', {
                course: mongooeseToObj(course),
            });
        } catch (error) {
            next(err);
        }
    }
    // [GET] courses/creat
    creat(req, res, next) {
        res.render('./courses/creat.hbs');
    }
    // [POST] courses/store
    async store(req, res, next) {
        try {
            const formdate = req.body;
            formdate.img = `https://img.youtube.com/vi/${formdate.videoid}/sddefault.jpg`;
            await Course.create(formdate);
            res.redirect('/');
        } catch (error) {
            console.log('Err save file err in /courses/store !!!');
        }
    }
}

module.exports = new CoursesController();