const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const Feedback = sequelize.define(
  "Feedback",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Name is required" },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Email is required" },
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Message is required" },
      },
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false, // No createdAt/updatedAt, only date
    tableName: "Feedbacks", // Match Mongoose model name
  }
);

module.exports = Feedback;
