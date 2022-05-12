import React, { useState } from 'react';
import axios from 'axios';
import VenueForm from '../components/VenueForm';
import VenueList from '../components/VenueList';
const Main = () => {
    
    const [venues, setVenues] = useState([]);

    const removeFromDom = venueId => {
        setVenues(venues.filter(venue => venue._id != venueId))
    }

    return (
        <div>
            <VenueForm venues={venues} setVenues={setVenues} />
            <hr/>
            <VenueList venues={venues} setVenues={setVenues} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main;