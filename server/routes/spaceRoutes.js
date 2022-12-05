const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
	getSpaces,
	getSpace,
	setSpace,
	updateSpace,
	deleteSpace,
	setDay,
	getDays,
	updateDay,
	deleteDay,
} = require("../controllers/spaceController");

// Get spaces
router.get("/", protect, getSpaces);
// Create new space
router.post("/create", protect, setSpace);
// Get specific space
router.get("/:spaceId", protect, getSpace);
// Update space
router.patch("/:spaceId/update", protect, updateSpace);
// Delete space
router.delete("/:spaceId/delete", protect, deleteSpace);
// Get space days
router.get("/:spaceId/days", protect, getDays);
// Create new day
router.post("/:spaceId/days/create", protect, setDay);
// Update day
router.patch("/:spaceId/days/:dayId/update", protect, updateDay);
// Delete day
router.delete("/:spaceId/days/:dayId/delete", protect, deleteDay);

module.exports = router;
