const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const user = require("./user.js");

class Exercise extends Model {}

Exercise.init(
  //id, excerciseName, fk user_id from User table
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    exerciseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "user", key: "id" },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "exercise",
  }
);
module.exports = Exercise;
