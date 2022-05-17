import React, { useState } from 'react';
import VenueForm from '../components/VenueForm';
import VenueList from '../components/VenueList';
import {Link} from 'react-router-dom';

const Main = () => {
    const [venues, setVenues] = useState([]);

    const removeFromDom = venueId => {
        setVenues(venues.filter(venue => venue._id != venueId))
    }

    return (
        <div>
            <h1 class="position-relative"> Rate That Venue!</h1>
            <hr/>
            <center><Link to={'venues/add'}> Add Venue </Link> </center>
            <hr/>
            <Link to={'/test'}> Test </Link>
            <center><VenueList venues={venues} setVenues={setVenues} removeFromDom={removeFromDom} />
            </center>
        </div>
    )
}

export default Main;