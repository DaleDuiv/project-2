const User = require("./user.js");
const Excercise = require("./exercise.js");
const Set = require("./set.js");

User.hasMany(Excercise, { foreignKey: "user_id", onDelete: "CASCADE" });

Excercise.belongsTo(User, {
  foreignKey: "user_id",
});

Excercise.hasMany(Set, { foreignKey: "exercise_id", onDelete: "CASCADE" });

Set.belongsTo(Excercise, { foreignKey: "exercise_id" });

module.exports = { User, Excercise, Set };
