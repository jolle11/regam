// updateDay, deleteSpace;
const asyncHandler = require("express-async-handler");

const Space = require("../models/spaceModel");
const Day = require("../models/dayModel");
const User = require("../models/userModel");

//TODO: add validations

// @desc    Get spaces
// @route   GET /api/spaces
// @access  Private
const getSpaces = asyncHandler(async (req, res) => {
	console.log("GET SPACES");
	const spaces = await Space.find({ user: req.user.id });
	res.status(200).json(spaces);
});

// @desc    Get space
// @route   GET /api/spaces/:spaceId
// @access  Private
const getSpace = asyncHandler(async (req, res) => {
	console.log("GET SPACE");
	const space = await Space.findById(req.params.spaceId);
	space.days = await Day.find({ space: req.params.spaceId });
	res.status(200).json(space);
});
// @desc    Get days
// @route   GET /api/spaces/:spaceId/days
// @access  Private
const getDays = asyncHandler(async (req, res) => {
	console.log("GET DAYS");
	const days = await Day.find({ user: req.user.id, space: req.params.spaceId });
	res.status(200).json(days);
});

// @desc    Set space
// @route   POST /api/spaces/create
// @access  Private
const setSpace = asyncHandler(async (req, res) => {
	console.log("SET SPACE");
	if (!req.body.name) {
		res.status(400);
		throw new Error("Please add a name for the space");
	}
	const space = await Space.create({
		user: req.user.id,
		name: req.body.name,
	});
	res.status(200).json(space);
});

// @desc    Set day
// @route   POST /api/spaces/:spaceId/days/create
// @access  Private
const setDay = asyncHandler(async (req, res) => {
	console.log("SET DAY");
	if (!req.body.date) {
		res.status(400);
		throw new Error("Please add a date");
	}
	const day = await Day.create({
		space: req.params.spaceId,
		date: req.body.date,
		water: req.body.water,
		fertilizer: req.body.fertilizer,
		transplant: req.body.transplant,
		comment: req.body.comment,
	});
	res.status(200).json(day);
});

// @desc    Update space
// @route   PATCH /api/spaces/:spaceId/update
// @access  Private
const updateSpace = asyncHandler(async (req, res) => {
	console.log("UPDATE SPACE");
	const space = await Space.findById(req.params.spaceId);
	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}
	// Check for space
	if (!space) {
		res.status(400);
		throw new Error("The space doesn't exist");
	}
	// Make sure the logged in user matches the space user
	if (space.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}
	// Update day
	const updatedSpace = await Space.findOneAndUpdate(
		{
			spaceId: req.params.spaceId,
		},
		req.body,
		{
			new: true,
		},
	);
	console.log(req.body);
	res.status(200).json(updatedSpace);
});

// @desc    Update day
// @route   PATCH /api/spaces/:spaceId/days/:dayId/update
// @access  Private
const updateDay = asyncHandler(async (req, res) => {
	console.log("UPDATE DAY");
	const space = await Space.findById(req.params.spaceId);
	const day = await Day.findOne({
		spaceId: req.params.spaceId,
		dayId: req.params.dayId,
	});
	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}
	// Check for space
	if (!space) {
		res.status(400);
		throw new Error("The day may exist but not in this space");
	}
	// Check for day inside space
	if (space && !day) {
		res.status(400);
		throw new Error("The space exists but no day was found");
	}
	// Make sure the logged in user matches the space user
	if (space.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}
	// Update day
	const updatedDay = await Day.findOneAndUpdate(
		{
			spaceId: req.params.spaceId,
			dayId: req.params.dayId,
		},
		req.body,
		{
			new: true,
		},
	);
	console.log(req.body);
	res.status(200).json(updatedDay);
});

// @desc    Delete space
// @route   DELETE /api/spaces/:spaceId/delete
// @access  Private
const deleteSpace = asyncHandler(async (req, res) => {
	console.log("DELETE SPACE");
	const space = await Space.findById(req.params.spaceId);
	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}
	// Check for space
	if (!space) {
		res.status(400);
		throw new Error("The day may exist but not in this space");
	}
	// Make sure the logged in user matches the space user
	if (space.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	await space.remove();
	res.status(200).json({ id: req.params.spaceId });
});

// @desc    Delete day
// @route   DELETE /api/spaces/:spaceId/days/:dayId/delete
// @access  Private
const deleteDay = asyncHandler(async (req, res) => {
	console.log("DELETE DAY");
	const space = await Space.findById(req.params.spaceId);
	const day = await Day.findOne({
		spaceId: req.params.spaceId,
		dayId: req.params.dayId,
	});
	if (!space) {
		res.status(400);
		throw new Error("Space not found");
	}
	// Check for the user
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}
	// Make sure the logged in user matches the space user
	if (space.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}
	await day.remove();
	res.status(200).json({ id: req.params.dayId });
});

module.exports = {
	getSpaces,
	getSpace,
	setSpace,
	updateSpace,
	deleteSpace,
	getDays,
	setDay,
	updateDay,
	deleteDay,
};
