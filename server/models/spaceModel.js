const mongoose = require("mongoose");
const toJSON = require("./utils/toJSON");
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
		days: [{ type: Schema.Types.ObjectId, ref: "Day" }],
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

toJSON(spaceSchema);

const Space = mongoose.model("Space", spaceSchema);

module.exports = Space;
