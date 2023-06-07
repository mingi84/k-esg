const express = require('express');
const router = express.Router();
const inforegisterController = require('../controllers/inforegisterController.js');
const useragent = require('useragent');
const TAB = "\t";

// Home route
router.get('/',inforegisterController.getInfoRegisterPage)


module.exports = router;
