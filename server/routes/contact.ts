import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Submit contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const contact = new Contact({
      name,
      email,
      message,
    });
    
    await contact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error sending message" });
  }
});

export default router;
