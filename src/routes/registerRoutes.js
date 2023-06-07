const express = require('express');
const router = express.Router();

// Register route
router.get('/', (req, res) => {
  console.log("register router");
  res.render('register.ejs', { title: 'Register', body: 'Register Content' });
});


module.exports = router;
