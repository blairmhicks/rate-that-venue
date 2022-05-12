const VenueController = require('../controllers/venue.controller');
 
module.exports = app => {
    app.post('/api/venues', VenueController.createNewVenue);
    app.get('/api/venues', VenueController.getAllVenues);
    app.get('/api/venues/:id', VenueController.getOneVenue);
    app.put('/api/venues/:id', VenueController.updateVenue);
    app.delete('/api/venues/:id', VenueController.deleteVenue);
}