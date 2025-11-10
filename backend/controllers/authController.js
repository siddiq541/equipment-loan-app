const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Register user
exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ username, email, password, role });

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
