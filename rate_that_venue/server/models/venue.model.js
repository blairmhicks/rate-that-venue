const mongoose = require('mongoose');
 
const VenueSchema = new mongoose.Schema({
    name: {
        type: String
    },
    website: {
        type: String
    },
    address: {
        type: String
    },
    score: {
        type: Number
    }
}, {timestamps: true});
 
const Venue = mongoose.model('Venue', VenueSchema);
 
module.exports = Venue;