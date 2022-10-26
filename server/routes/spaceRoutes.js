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
router.get("/", protect, getSpaces);
// Show specific space, delete specific space
router.route("/:id").get(protect, getSpace).delete(protect, deleteSpace);
// Show space days
router.get("/:id/days", protect, getDays);
// Create new space
router.post("/create", protect, setSpace);
// Create new day
router.post("/:id/days/create", protect, setDay);
// Update day
router.patch("/:id/days/:id/update", protect, updateDay);

module.exports = router;
