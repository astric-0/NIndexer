import mongoose from "mongoose";

const keywordsSchema = new mongoose.Schema({
	word: {
		type: String,
		required: true,
		unique: true,
		index: true,
	},

	weights: {
		type: Map,
		of: {
			type: [{ type: String, unique: true }],
		},
		required: true,
		default: new Map(),
	},
});

const KeywordsModel = mongoose.model("keywords", keywordsSchema);

export default KeywordsModel;
