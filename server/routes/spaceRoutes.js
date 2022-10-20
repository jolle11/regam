const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
	getSpaces,
	getSpace,
	getDays,
	setSpace,
	setDay,
	updateDay,
	deleteSpace,
} = require("../controllers/spaceController");

// Show spaces
router.get("/", getSpaces);
// Show specific space, delete specific space
router.route("/:id").get(protect, getSpace).delete(protect, deleteSpace);
// Show space days
router.get("/:id/days", getDays);
// Create new space
router.post("/create", setSpace);
// Create new day
router.post("/:id/days/create", setDay);
// Update day
router.patch("/:id/days/update", updateDay);

module.exports = router;
