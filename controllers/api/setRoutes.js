const router = require('express').Router();
const { Set } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
    try {
      const newSet = await Set.create({
        reps: req.body.reps,
        weight: req.body.weight,
        exercise_id: req.params.id
      });
  
      res.status(200).json(newSet);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;