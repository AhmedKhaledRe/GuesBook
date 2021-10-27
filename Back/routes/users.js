const express = require("express");
const User = require("../controllers/user");
const router = express.Router();

router.post("/auth", User.login);

router.post("/register", User.register);

module.exports = router;
