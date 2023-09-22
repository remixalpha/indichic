// server/routes/authRoutes.js
const express = require("express");
const router = express.Router();

// Simulated user data (in-memory storage, for demonstration purposes)
const users = [
  { email: "rahul123@gmail.com", password: "12345" },
  // Add more user data as needed
];

// Sign-in route
router.post("/signin", (req, res) => {
  console.log("Received POST request to /signin");
  console.log("Request body:", req.body);
  const { email, password } = req.body;

  // Find user by email
  const user = users.find((user) => user.email === email);

  if (user && user.password === password) {
    res.json({ success: true, message: "Sign-in successful" });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }
});

module.exports = router;
