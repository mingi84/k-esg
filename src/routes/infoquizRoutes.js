const express = require('express');
const router = express.Router();
const infoquizController = require('../controllers/infoquizController.js');
const useragent = require('useragent');
const TAB = "\t";

// Home route
router.get('/', infoquizController.getInfoQuizPage);


module.exports = router;
