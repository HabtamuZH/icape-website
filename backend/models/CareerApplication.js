const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const CareerApplication = sequelize.define(
  "CareerApplication",
  {
    fullName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Full name is required" },
        len: [1, 100], // Max length 100
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Email is required" },
        // isEmail: { msg: "Please provide a valid email" }, // Uncomment if match validator is needed
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Phone number is required" },
        // is: [/^\+?[1-9]\d{1,14}$/, "Please provide a valid phone number"], // Uncomment if match validator is needed
      },
    },
    opportunityType: {
      type: DataTypes.ENUM("Professional Career Opportunities"),
      allowNull: false,
      defaultValue: "Professional Career Opportunities",
      validate: {
        notEmpty: { msg: "Opportunity type is required" },
      },
    },
    department: {
      type: DataTypes.ENUM(
        "Engineering",
        "Product Development",
        "Business Operations"
      ),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Department is required" },
      },
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Reason for applying is required" },
        len: [1, 1000], // Max length 1000
      },
    },
    skills: {
      type: DataTypes.TEXT,
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Skills are required" },
        len: [1, 1000], // Max length 1000
      },
    },
    availability: {
      type: DataTypes.ENUM("Full-time", "Part-time"),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Availability is required" },
      },
    },
    cv: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "CV is required" },
      },
    },
    submittedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false, // No createdAt/updatedAt, as Mongoose schema doesn't use timestamps
    tableName: "CareerApplications",
    indexes: [
      {
        fields: ["email", "submittedAt"],
        unique: false,
        order: { submittedAt: "DESC" },
      },
    ],
  }
);

module.exports = CareerApplication;
