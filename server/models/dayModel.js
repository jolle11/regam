const mongoose = require("mongoose");
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
	},
	{ timestamps: true },
);

const Day = mongoose.model("Day", daySchema);

module.exports = Day;
