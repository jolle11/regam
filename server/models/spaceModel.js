const mongoose = require("mongoose");
const { Schema } = mongoose;

const spaceSchema = Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		name: {
			type: String,
			required: true,
		},
		days: [
			{
				type: Schema.Types.ObjectId,
				ref: "Day",
			},
		],
	},
	{
		versionKey: false,
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Space", spaceSchema);
