const User = require("./user.js");
const Exercise = require("./exercise.js");
const Set = require("./set.js");
//const { belongsTo } = require("./exercise.js", "./set.js");

Exercise.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Exercise, { foreignKey: "user_id", onDelete: "CASCADE" });

Set.belongsTo(Exercise, { foreignKey: "exercise_id" });

Exercise.hasMany(Set, { foreignKey: "exercise_id", onDelete: "CASCADE" });

module.exports = { User, Exercise, Set };
