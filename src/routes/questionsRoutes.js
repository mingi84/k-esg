const express = require('express');
const questionsController = require('../controllers/questionsController.js');

const router = express.Router();

// Questions route
router.get('/', (req, res) => {
  res.render('./layouts/question.ejs', { title: 'Questions' });
});

// Questions route
router.get('/info', (req, res) => {
  res.render('./layouts/infoquiz.ejs', { title: 'Questions', body: 'info register Content' });
});


// Questions route
router.get('/enviro', (req, res) => {
  res.render('./layouts/enviro.ejs', { title: 'Questions' });
});

// Questions route
router.get('/social', (req, res) => {
  res.render('./layouts/social.ejs', { title: 'Questions' });
});


// Questions route
router.get('/governance', (req, res) => {
  res.render('./layouts/governance.ejs', { title: 'Questions' });
});


router.post('/', (req, res) => {
  const { question } = req.body;
  res.redirect('/questions');
});

module.exports = router;
