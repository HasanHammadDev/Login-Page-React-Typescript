import express from "express";
import User from "../Model/RegisterSchema.js";

const router = express.Router();

// POST route for user registration
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user with plain password
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;