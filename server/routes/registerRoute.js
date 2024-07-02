import express from "express";
import { validationResult } from 'express-validator';
import User from "../Model/RegisterSchema.js";
import validateRegistration from "../registerValidation/validateRegisteration.js";

const router = express.Router();

// POST route for user registration
router.post("/", validateRegistration, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password, username } = req.body;

  try {
    // Check if the user already exists
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user with plain password
    const newUser = new User({ email, password, username });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;