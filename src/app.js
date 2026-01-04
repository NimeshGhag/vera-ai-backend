const express = require("express");
const cookieParser = require("cookie-parser");

// creating a server
const app = express();

// Middlwares
app.use(express.json());
app.use(cookieParser());

module.exports = app;
