import mongoose from "mongoose";

const urlsSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true,
		unique: true,
		index: true,
	},

	lastUpdated: {
		type: Date,
		default: Date.now,
	},

	status: {
		type: String,
		required: true,
	},

	links: {
		type: [String],
	},
});

const UrlsModel = new mongoose.model("urls", urlsSchema);

export default UrlsModel;
