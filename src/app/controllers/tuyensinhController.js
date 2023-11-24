const FormSub = require('../model/form_sub');
const { mutipleMongooeseToObj } = require('../../util/mongooes');
class tuyensinhController {
    // [GET] /tuyensinh
    index(req, res, next) {
        FormSub.find({})
            .then((FormSubs) => {
                res.render('tuyensinh.hbs', {
                    FormSubs: mutipleMongooeseToObj(FormSubs),
                });
            })
            .catch(next);
    }
    // [POST] /tuyensinh/form/sub
    async subform(req, res, next) {
        try {
            const small = new FormSub(req.body);
            await small.save();
            
            res.redirect('/tuyensinh');
        } catch (error) {
            console.log('Err save file err in /FormSubs/store !!!');
            res.redirect('/tuyensinh');
        }
    }
}

module.exports = new tuyensinhController();
