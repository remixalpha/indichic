const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes"); // Import your authRoutes
const apiRoutes = require("./api/apiRoutes"); // Import the new API route

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's URL
  })
);

// Routes
app.use("/auth", authRoutes); // Use the authRoutes for authentication
app.use("/api", apiRoutes); // Mount the new API route

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
