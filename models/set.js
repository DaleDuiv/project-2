const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const exercise = require("./exercise.js");

class Set extends Model {}

Set.init(
  {
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
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "sets",
  }
);

module.exports = Set;
