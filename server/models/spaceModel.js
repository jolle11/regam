const mongoose = require("mongoose");
const { Schema } = mongoose;

const spaceSchema = Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		name: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

spaceSchema.virtual("days", {
	ref: "Day",
	localField: "_id",
	foreignField: "space",
});

const Space = mongoose.model("Space", spaceSchema);

module.exports = Space;
