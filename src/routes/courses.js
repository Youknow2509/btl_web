const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/creat', coursesController.creat);
router.post('/store', coursesController.store );
router.get('/:_id/edit', coursesController.edit);
router.delete('/:_id/', coursesController.del);
router.put('/:_id/', coursesController.update);
router.get('/:slug', coursesController.show);

module.exports = router;
