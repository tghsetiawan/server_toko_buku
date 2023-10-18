const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/auth/signin", controller.sigin);
router.post("/auth/signup", controller.signup);

module.exports = router;
