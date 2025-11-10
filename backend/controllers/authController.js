const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Register user
exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    let user; // declare here
    try {
      user = await User.create({ username, email, password, role });
    } catch (err) {
      if (err.code === 11000) {
        // MongoDB duplicate key error
        return res.status(409).json({ message: "Email already registered" });
      }
      return res.status(500).json({ message: err.message });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, username, email, role },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
