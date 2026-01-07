const express = require("express");
const cookieParser = require("cookie-parser");

// importing routes
const authRoutes = require("./routes/auth.routes")

// creating a server
const app = express();

// Middlwares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth",authRoutes)

module.exports = app;
