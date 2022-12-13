const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");

    return;
  }

  res.render("login");
});

router.get("/", withAuth, (req, res) => {
  //write sequelize statement to get data from excercises table
  //getAll
  //res.render('homepage');

  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
