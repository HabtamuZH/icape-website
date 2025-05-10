const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const Blog = sequelize.define(
  "Blog",
  {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      trim: true,
      validate: {
        len: [1, 100], // Max length 100
      },
    },
    subtitle: {
      type: DataTypes.STRING,
      trim: true,
    },
    description: {
      type: DataTypes.TEXT,
      trim: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    cloudinaryId: {
      type: DataTypes.STRING,
    },
    tags: {
      type: DataTypes.TEXT, // Store as JSON string
      get() {
        const value = this.getDataValue("tags");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("tags", JSON.stringify(value || []));
      },
    },
    excerpt: {
      type: DataTypes.TEXT,
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
    tableName: "Blogs", // Match Mongoose model name
  }
);

module.exports = Blog;
