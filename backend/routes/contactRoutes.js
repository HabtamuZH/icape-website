import express from "express"
import Contact from "../Models/contact.js" // Ensure you use the .js extension
const router = express.Router()

// Create a new contact submission
router.post("/", async (req, res) => {
  const {name, email, message} = req.body
  try {
    const contact = new Contact({name, email, message})
    await contact.save()
    res
      .status(201)
      .json({message: "Contact form submitted successfully", contact})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

// Get all contact submissions (optional for admin use)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

export default router // Export router using ES module syntax
