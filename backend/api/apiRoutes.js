const express = require("express");
const router = express.Router();

// Define your API endpoint
router.get("/data", (req, res) => {
  const data = { message: "This is your API response data" };
  res.json(data);
});

module.exports = router;
