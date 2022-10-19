const express = require("express");
const router = express.Router();

const {
	getSpaces,
	setSpace,
	updateSpace,
	deleteSpace,
} = require("../controllers/spaceController");

module.exports = router;
