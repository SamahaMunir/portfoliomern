import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: "Message received" });
});

export default router;
