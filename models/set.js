const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection.js");
const excercise = require("./excercise.js");

class Set extends Model {}

Set.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  excercise_id: {
    type: DataTypes.INTEGER,
    references: { model: "excercise", key: "id" },
  },

  date: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },

  time: { type: DataTypes.DATE, defaultValue: DataTypes.TIME },

  reps: {
    type: DataTypes.INTEGER,
    validate: { isNumeric: true, min: 0 },
    defaultValue: 0,
  },

  weight: {
    type: DataTypes.INTEGER,
    validate: { isNumeric: true, min: 0 },
    defaultValue: 0,
  },
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: "sets",
});

module.exports = Set;

//https://stackoverflow.com/questions/42519583/sequelize-updating-updatedat-manually
//https://dev.mysql.com/doc/refman/8.0/en/date-and-time-types.html
//https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/#:~:text=The%20most%20used%20method%20to,0100%20(British%20Summer%20Time)
