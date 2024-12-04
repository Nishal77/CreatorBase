// api/controllers/authController.js
const User = require("../models/User");

const registerUser = async (req, res) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({ email });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { registerUser };
