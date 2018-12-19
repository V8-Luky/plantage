const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VoteSchema = new Schema({
	timestamp: {type: Date, expires: "12h", default: Date.now},
	user: {type: String, required: true},
	vote: {type: String, required: true}
});

module.exports = mongoose.model("Vote", VoteSchema);
