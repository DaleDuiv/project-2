const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const exercise = require("./exercise.js");

class Set extends Model {}

Set.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    //date: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },

    //time: { type: DataTypes.DATE, defaultValue: DataTypes.TIME },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

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
    exercise_id: {
      type: DataTypes.INTEGER,
      references: { model: "exercise", key: "id" },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "set",
  }
);

module.exports = Set;
