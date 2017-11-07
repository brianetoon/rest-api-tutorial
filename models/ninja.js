const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
	type: {
		type: String,
		default: "Point"
	},
	coordinates: {
		type: [Number],
		index: "2dsphere"
	}
});

// create ninja Schema
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
	},
	geometry: GeoSchema
});

// create ninja collection or model
const Ninja = mongoose.model('ninja', NinjaSchema); 
// mongoose automatically pluralizes 'ninja' to the 'ninjas' collection

module.exports = Ninja;
