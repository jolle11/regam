const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema(
	{
		name: {
			type: String,
			required: [true, "Please add a name"],
		},
		email: {
			type: String,
			required: [true, "Please add an email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please add a password"],
		},
	},
	{
		versionKey: false,
	},

	{ timestamps: true },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
