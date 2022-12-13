const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Exercise } = require('../models')

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      
      return;
    }
  
    res.render('login');
});

router.get('/', async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll({
        where: {
          user_id: req.session.user_id
        }
    });

    const exercises = exerciseData.map((exercise) => exercise.get({ plain: true }));

    res.render('homepage', {
        exercises,
        logged_in: req.session.logged_in
    })
} catch (error) {
    res.status(500).json(error)
}
});

module.exports = router;