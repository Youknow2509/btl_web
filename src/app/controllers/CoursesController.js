const Course = require('../model/Course');
const { mongooeseToObj } = require('../../util/mongooes');
class CoursesController {
    // [GET] courses/:slag
    async show(req, res) {
        try {
            const course = await Course.findOne({ slag: req.params.slag });
            res.render('./courses/show.hbs', {
                course: mongooeseToObj(course)
            });
        } catch (error) {
            next(err);
        }
    }
}

module.exports = new CoursesController();
