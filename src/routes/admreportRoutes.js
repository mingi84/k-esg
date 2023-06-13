const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.render('layouts/admreport.ejs', { title: 'Admin Report', body: 'Admin Report Content' });
});

router.get('/user', (req, res) => {
    res.render('layouts/admreportbyuser.ejs', { title: 'Admin Report', body: 'Admin Report Content' });
});


module.exports = router;