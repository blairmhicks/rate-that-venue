const { response, request } = require("express");
const Venue = require("../models/venue.model.js");

module.exports.createNewVenue = (req, res) => {
    Venue.create(req.body)
        .then((newVenue) => res.json (newVenue))
        .catch((err) => console.log(err));
},

module.exports.getAllVenues = (req, res) => {
    Venue.find({})
        .then((venues) => {
            console.log(venues);
            res.json(venues);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
},

module.exports.getOneVenue = (req, res) => {
    Venue.findOne({_id:req.params.id})
        .then(venue => {
            console.log(venue);
            res.json(venue);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports.updateVenue = (req, res) => {
    Venue.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then((updatedVenue) => {
            console.log(updatedVenue);
            res.json(updatedVenue);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    }

module.exports.deleteVenue = (req, res) => {
    Venue.deleteOne({ _id: req.params.id })
        .then((deleteConfirmation) => {
            console.log(deleteConfirmation);
            res.json(deleteConfirmation);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        }
        )
}