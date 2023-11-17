const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/', meController.index);
router.get('/store/courses/', meController.storeCourses);
router.get('/store/news/', meController.storeNews);

module.exports = router;
