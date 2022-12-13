const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

router.get('/', (req, res) => {
  //write sequelize statement to get data from excercises table
  //getAll
  res.render('homepage');

});

module.exports = router;
