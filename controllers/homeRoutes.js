const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Exercise, Set } = require("../models");

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");

    return;
  }

  res.render("login");
});

router.get("/", withAuth, async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // const userData = await User.findByPk(req.session.user_id)

    const exercises = exerciseData.map((exercise) =>
      exercise.get({ plain: true })
    );

    // const users = userData.map((user) => user.get({ plain: true }));

    res.render("homepage", {
      exercises,
      // users,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const setData = await Set.findAll({
      where: {
        exercise_id: req.params.id,
      },
    });

    const exercises = exerciseData.map((exercise) =>
      exercise.get({ plain: true })
    );

    const sets = setData.map((set) => set.get({ plain: true }));

    res.render("sets", {
      exercises,
      sets,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
