const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/CoursesController');

router.get('/creat', newsController.creat);
router.post('/store', newsController.store );
router.get('/:slug', newsController.show);

module.exports = router;
