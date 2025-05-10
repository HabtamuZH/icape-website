const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const Job = sequelize.define(
  "Job",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Title is required" },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Description is required" },
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Location is required" },
      },
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
    tableName: "Jobs", // Match Mongoose model name
  }
);

module.exports = Job;
