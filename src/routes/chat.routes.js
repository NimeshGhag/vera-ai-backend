const express = require("express");

const router = express.Router();

// importing middleware
const authMiddleware = require("../middlewares/auth.middleware");

// importing controllers
const { createChatController } = require("../controllers/chat.controllers");

// route for creating chat
router.post("/", authMiddleware, createChatController);

module.exports = router;
