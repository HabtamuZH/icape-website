const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.SQLITE_DB_PATH || "database.sqlite", // Path to SQLite database file
  logging: false// console.log, // Optional: Log SQL queries for debugging
});

const connectDB = async () => {
  try {
    await sequelize.authenticate(); // Test the connection
    console.log("SQLite connected successfully!");
    await sequelize.sync(); // Sync models to create tables if they don't exist
  } catch (error) {
    console.error("SQLite connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
