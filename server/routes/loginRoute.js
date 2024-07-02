import express from "express";
import bcrypt from "bcrypt";
import User from "../Model/RegisterSchema.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords using bcrypt.compare
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(403).json({
        success: false,
        message: "Invalid Login",
      });
    }

    // Create JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Create a cookie for future requests
    res.cookie('token', token, {
      httpOnly: true,
    });

    res.status(200).json({ success: true, message: "Login successful", token });


  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ success: false, message: "Login Router error" });
  }
});

export default router;