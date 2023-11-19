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
            
            const small = new Course(formdate);
            await small.save();
            
            res.redirect('/');
        } catch (error) {
            console.log('Err save file err in /courses/store !!!');
            res.redirect('/');
        }
    }
    // [GET] courses/:_id/edit
    async edit(req, res, next) {
        try {
            const courses = await Course.findById(req.params._id);
            res.render('./courses/edit.hbs', {
                courses: mongooeseToObj(courses),
            });
        } catch (error) {
            res.render('err.hbs')
        }
    }
    // [PUT] courses/:_id/
    update(req, res, next) {
        Course.findByIdAndUpdate(req.params._id, req.body, function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                console.log("Updated User : ", docs);
                res.redirect('/me/store/courses/');
            }
        });
    }
    // [DELETE] courses/:_id/del
    del(req, res, next) {
        Course.findByIdAndDelete(req.params._id, function (err, docs) {
            if (err) {
                console.log(err);
                res.render('err.hbs');
            } else {
                console.log("Deleted User : ", docs);
                res.redirect('/me/store/courses/');
            }
        });
    }
}

module.exports = new CoursesController();