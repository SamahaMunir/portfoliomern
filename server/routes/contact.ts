import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

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
