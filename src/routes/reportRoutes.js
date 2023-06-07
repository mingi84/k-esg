const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController.js');


// Report route
router.get('/', reportController.getReportPage);

router.post('/', reportController.postReportPage);

module.exports = router;
