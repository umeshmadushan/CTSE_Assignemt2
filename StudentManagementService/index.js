const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoute = require("./routes/studentRoute");
const { connectToDatabase } = require("./config/database");

const app = express();
const PORT = process.env.PORT || 4100;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use("/student", studentRoute);

// Connect to MongoDB
connectToDatabase();

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
