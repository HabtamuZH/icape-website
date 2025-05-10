const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const TeamMember = sequelize.define(
  "TeamMember",
  {
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Avatar URL is required" },
      },
    },
    cloudinaryId: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Name is required" },
        len: [1, 100], // Max length 100
      },
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Title is required" },
        len: [1, 100], // Max length 100
      },
    },
    desc: {
      type: DataTypes.STRING(200),
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Description is required" },
        len: [1, 200], // Max length 200
      },
    },
    socialLinks: {
      type: DataTypes.TEXT, // Store as JSON string
      get() {
        const value = this.getDataValue("socialLinks");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        if (Array.isArray(value)) {
          value.forEach((link) => {
            if (!link.platform || !link.url) {
              throw new Error("Social platform name and URL are required");
            }
            if (
              ![
                "LinkedIn",
                "Twitter",
                "GitHub",
                "Instagram",
                "Facebook",
              ].includes(link.platform)
            ) {
              throw new Error("Invalid social platform");
            }
          });
        }
        this.setDataValue("socialLinks", JSON.stringify(value || []));
      },
      defaultValue: "[]",
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false, // Manually define createdAt, no updatedAt
    tableName: "TeamMembers", // Match Mongoose model name
  }
);

module.exports = TeamMember;
