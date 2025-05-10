const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const Project = sequelize.define(
  "Project",
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Project name is required" },
        len: [1, 100], // Max length 100
      },
    },
    role: {
      type: DataTypes.STRING(100),
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Project role is required" },
        len: [1, 100], // Max length 100
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Content is required" },
      },
    },
    type: {
      type: DataTypes.ENUM(
        "architecture design",
        "urban design",
        "engineering design"
      ),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Project type is required" },
      },
      set(value) {
        this.setDataValue("type", value.toLowerCase()); // Enforce lowercase
      },
    },
    images: {
      type: DataTypes.TEXT, // Store as JSON string
      allowNull: false,
      get() {
        const value = this.getDataValue("images");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        if (!Array.isArray(value) || value.length === 0) {
          throw new Error("At least one image is required");
        }
        value.forEach((img) => {
          if (!img.url) {
            throw new Error("Image URL is required");
          }
        });
        this.setDataValue("images", JSON.stringify(value));
      },
      defaultValue: "[]",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
    tableName: "Projects", // Match Mongoose model name
  }
);

// Hook to update updatedAt before updating
Project.addHook("beforeUpdate", (project) => {
  project.updatedAt = new Date();
});

module.exports = Project;
