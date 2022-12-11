const User = require("./user.js");
const Excercise = require("./exercise.js");
const Set = require("./set.js");
//const { belongsTo } = require("./exercise.js", "./set.js");

Excercise.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Excercise, { foreignKey: "user_id", onDelete: "CASCADE" });

Set.belongsTo(Excercise, { foreignKey: "excercise_id" });

Excercise.hasMany(Set, { foreignKey: "excercise_id", onDelete: "CASCADE" });

module.exports = { User, Excercise, Set };
