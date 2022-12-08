const router = require('express').Router();
const { Exercise } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newExercise = await Exercise.create({
        exercise: req.session.exercise,
      });
  
      res.status(200).json(newExercise);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;