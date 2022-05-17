const mongoose = require('mongoose');
 
const VenueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Venue name is required"],
        minLength: [6, "Venue name must be at least 6 characters long"],
        maxLength: [30, "Venue name must be fewer than 30 characters"]
    },
    website: {
        type: String,
        required: [true, "Venue website is required"],
    },
    address: {
        type: String,
        required: [true, "Venue address is required"],
        minLength: [10, "Address must be at least 10 characters long"],
        maxLength: [40, "Address must be fewer than 40 characters"]
    },
    score: {
        type: Number,
        required: [true, "Please enter a whole number score between 1 and 10"],
        min: [1, "Please enter a whole number score between 1 and 10"],
        max: [10, "Please enter a whole number score between 1 and 10"]
    },
    review: {
        type: String,
        required: [true, "Review is required"],
        minLength: [6, "Review must be at least six characters"],
        maxLength: [120, "Review must be fewer than 120 characters"]
    },
}, {timestamps: true});
 
const Venue = mongoose.model('Venue', VenueSchema);
 
module.exports = Venue;