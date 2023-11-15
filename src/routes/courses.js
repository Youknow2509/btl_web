const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/CoursesController');

router.get('/:slag', newsController.show);

module.exports = router;
