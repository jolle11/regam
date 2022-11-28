const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
	getSpaces,
	getSpace,
	getDays,
	setSpace,
	setDay,
	updateSpace,
	updateDay,
	deleteSpace,
} = require("../controllers/spaceController");

// Show spaces
router.get("/", protect, getSpaces);
// Show specific space, delete specific space
router.route("/:spaceId").get(protect, getSpace).delete(protect, deleteSpace);
// Show space days
router.get("/:spaceId/days", protect, getDays);
// Create new space
router.post("/create", protect, setSpace);
// Create new day
router.post("/:spaceId/days/create", protect, setDay);
// Update space
router.patch("/:spaceId/update", protect, updateSpace);
// Update day
router.patch("/:spaceId/days/:dayId/update", protect, updateDay);

module.exports = router;
