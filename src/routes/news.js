const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slag', newsController.show);
router.use('/', newsController.index);

module.exports = router;