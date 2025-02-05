// // User Model (User.js)
// import mongoose from "mongoose"
// import bcrypt from "bcryptjs"
// import jwt from "jsonwebtoken"
// import dotenv from "dotenv"
// dotenv.config()

// const userSchema = new mongoose.Schema(
//   {
//     username: {type: String, required: true},
//     email: {type: String, required: true, unique: true},
//     password: {type: String, required: true},
//     role: {type: String, enum: ["admin", "client"], default: "client"}
//   },
//   {timestamps: true}
// )

// // Hash password before saving
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next()

//   const salt = await bcrypt.genSalt(8)
//   this.password = await bcrypt.hash(this.password, salt)
//   next()
// })

// // Method to generate JWT token
// userSchema.methods.generateAuthToken = function () {
//   return jwt.sign({id: this._id, role: this.role}, process.env.JWT_SECRET, {
//     expiresIn: "24h"
//   })
// }

// // Method to check if password matches
// userSchema.methods.isPasswordMatch = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }

// export default mongoose.model("User", userSchema)

import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

// Define the schema for the user
const userSchema = new mongoose.Schema(
  {
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true, index: true},
    googleId: {type: String, required: false, unique: true, index: true},
    password: {type: String, required: false},
    googleId: {type: String, required: false, unique: true},
    role: {type: String, enum: ["admin", "client"]}
  },
  {timestamps: true}
)

// Hash password before saving (only if password is modified)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// Method to generate JWT token
userSchema.methods.generateAuthToken = function () {
  const payload = {
    id: this._id,
    role: this.role
  }
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "24h" // Token expires in 24 hours
  })
  return token
}

const User = mongoose.model("User", userSchema)
export default User
