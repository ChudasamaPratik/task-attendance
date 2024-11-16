// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

dotenv.config(); // Load environment variables

const app = express();
connectDB(); // Connect to MongoDB

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.use("/api/auth", require("./routes/auth"));

// Global error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
