const mongoose = require('mongoose');
const baseModelSchema = new mongoose.Schema({
    propertyType: {
	type: String,
//	required: true,
    },
    price: {
	type: Number,
//	required: true,
    },
    address: {
	type: String,
//	required: true,
    },
    description: String,
    propertyName: String,
    location: String,
    amenities: [{
	type: String,
    }],
    contactInfo: [{
	type: String,
    }],
    imageUrls: [String],
    

});

module.exports = mongoose.model('baseModel', baseModelSchema);
