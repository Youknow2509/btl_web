const express = require('express');
const router = express.Router();

const tuyensinhController = require('../app/controllers/tuyensinhController');

router.post('/form/sub', tuyensinhController.subform);

router.get('/', tuyensinhController.index);

module.exports = router;
