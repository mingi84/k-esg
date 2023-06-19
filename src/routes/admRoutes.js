const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.render('layouts/admlogin.ejs', { title: 'Admin Login', body: 'Admin Login Content' });
});



module.exports = router;