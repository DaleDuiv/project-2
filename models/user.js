const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection.js");

class User extends Model {
  //check password method goes here?
}

User.init(
  {
    //db columns for user id, fname, lname, email and password
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    //hook to encrypt pass before storing to db
    hooks: {
      beforeCreate: async (userPassword) => {
        userPassword.password = await bcrypt.hash(userPassword.password, 10);
        //saltRound = 10
        return userPassword;
      },
    },
    //sequelize parameters

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
