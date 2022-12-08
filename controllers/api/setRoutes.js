const router = require('express').Router();
const { Set } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newSet = await Set.create({
        reps: req.session.reps,
        weight: req.session.weight,
      });
  
      res.status(200).json(newExercise);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;