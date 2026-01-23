import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error sending message" });
  }
});

export default router;
