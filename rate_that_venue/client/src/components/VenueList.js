import React, { useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const VenueList = (props) => {

    const {removeFromDom, venues, setVenues} = props;

    //Get all venues
    useEffect(() => {
        axios.get("http://localhost:8000/api/venues")
        .then((res) => {
            console.log(res.data);
            setVenues(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])


    //Delete one venue
    const deleteVenue = (venueId) => {
        axios.delete(`http://localhost:8000/api/venues/${venueId}`)
            .then((res) => {
                console.log(res.data);
                removeFromDom(venueId)
            })
            .catch((err) => console.log(err))
    }
    
    //map through venue list and delete one venue
    return (
        <div>
            {
                venues.map((venue, index) => {
                return (
                    <div>
                    <p key={index}>{venue.name}, {venue.website}, {venue.score}</p>
                <Link to={`/venues/${venue._id}`}> {venue.name} </Link>
                <Link to={`/venues/edit/${venue._id}`}> Edit </Link>
                <button onClick={(e) => {deleteVenue(venue._id)}}>
                    Delete
                </button>
                    </div>
                )})
            }
        </div>
    )
}



export default VenueList