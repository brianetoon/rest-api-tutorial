const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const NinjaSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	},
	rank: {
		type: String
	},
	available: {
		type: Boolean,
		default: false
	}
	// add in geo location
});

// create ninja collection
const Ninja = mongoose.model('ninja', NinjaSchema); 
// mongoose automatically pluralizes 'ninja' to the 'ninjas' collection

module.exports = Ninja;
