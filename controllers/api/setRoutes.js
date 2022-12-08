const router = require('express').Router();
const { Set } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newSet = await Set.create({
        reps: req.body.reps,
        weight: req.body.weight,
        exercise_id: req.session.exercise_id
      });
  
      res.status(200).json(newSet);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;