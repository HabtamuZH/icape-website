const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const CareerOpportunity = sequelize.define(
  "CareerOpportunity",
  {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Opportunity title is required" },
        len: [1, 100], // Max length 100
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Description is required" },
        len: [1, 1000], // Max length 1000
      },
    },
    type: {
      type: DataTypes.ENUM(
        "Full-time & Part-time Positions",
        "Paid Internship (Summer/Fall 2025)",
        "Contract"
      ),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Opportunity type is required" },
      },
    },
    details: {
      type: DataTypes.TEXT, // Store as JSON string
      allowNull: false,
      get() {
        const value = this.getDataValue("details");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        if (!Array.isArray(value) || value.length === 0) {
          throw new Error("At least one detail is required");
        }
        this.setDataValue("details", JSON.stringify(value));
      },
      defaultValue: "[]",
    },
    buttonText: {
      type: DataTypes.STRING(50),
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Button text is required" },
        len: [1, 50], // Max length 50
      },
    },
    buttonLink: {
      type: DataTypes.STRING,
      defaultValue: "",
      // validate: {
      //   is: [/^\/[a-zA-Z0-9\-\/]*$/, "Button link must be a valid URL path"], // Uncomment if required
      // },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false, // Manage createdAt/updatedAt manually
    tableName: "CareerOpportunities",
    indexes: [
      {
        fields: ["title", "type"],
        unique: false,
      },
    ],
  }
);

// Hook to update updatedAt before saving
CareerOpportunity.addHook("beforeUpdate", (opportunity) => {
  opportunity.updatedAt = new Date();
});

module.exports = CareerOpportunity;
