const mongoose = require("mongoose");
const toJSON = require("./utils/toJSON");
const { Schema } = mongoose;

const daySchema = Schema(
	{
		space: { type: Schema.Types.ObjectId, ref: "Space" },
		date: {
			type: String,
			required: true,
		},
		water: {
			type: Boolean,
		},
		fertilizer: {
			type: Boolean,
		},
		transplant: {
			type: Boolean,
		},
		comment: {
			type: String,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

toJSON(daySchema);

const Day = mongoose.model("Day", daySchema);

module.exports = Day;
