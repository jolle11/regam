// updateDay, deleteSpace;
const asyncHandler = require("express-async-handler");

const Space = require("../models/spaceModel");
const Day = require("../models/dayModel");
const User = require("../models/userModel");

// @desc    Get spaces
// @route   GET /api/spaces
// @access  Private
const getSpaces = asyncHandler(async (req, res) => {
	console.log("GET SPACES");
	const spaces = await Space.find({ user: req.user.id });
	res.status(200).json(spaces);
});

// @desc    Get space
// @route   GET /api/spaces/:id
// @access  Private
const getSpace = asyncHandler(async (req, res) => {
	console.log("GET SPACE");
	const space = await Space.findById(req.params.id).populate("days");
	res.status(200).json(space);
});
// @desc    Get days
// @route   GET /api/spaces/:id/days
// @access  Private
const getDays = asyncHandler(async (req, res) => {
	console.log("GET DAYS");
	const days = await Day.find({ user: req.user.id });
	res.status(200).json(days);
});

// @desc    Set space
// @route   GET /api/spaces/create
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
// @route   GET /api/spaces/:id/days/create
// @access  Private
const setDay = asyncHandler(async (req, res) => {
	console.log("SET DAY");
	if (!req.body.date) {
		res.status(400);
		throw new Error("Please add a date");
	}
	const day = await Day.create({
		space: req.params.id,
		date: req.body.date,
		water: req.body.water,
		fertilizer: req.body.fertilizer,
		transplant: req.body.transplant,
		comment: req.body.comment,
	});
	res.status(200).json(day);
});

// @desc    Update day
// @route   PATCH /api/spaces/:id/days/:id/update
// @access  Private
const updateDay = asyncHandler(async (req, res) => {
	console.log("UPDATE DAY");
});

// @desc    Delete space
// @route   DELETE /api/spaces/:id
// @access  Private
const deleteSpace = asyncHandler(async (req, res) => {
	console.log("DELETE SPACE");
	const space = await Space.findById(req.params.id);
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
	await space.remove();
	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getSpaces,
	getSpace,
	getDays,
	setSpace,
	setDay,
	updateDay,
	deleteSpace,
};
