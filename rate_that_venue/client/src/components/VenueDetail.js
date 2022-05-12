import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VenueDetail = (props) => {

    const [venue, setVenue] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/venues/${id}`)
            .then((res) => {
                console.log(res.data);
                setVenue(res.data);
            })
            .catch((err) => console.log(err))
    }, [id])
    return (
        <div>
            <h1>{venue.name}</h1>
            <p>Website: {venue.website}</p>
            <p>Address: {venue.address}</p>
        </div>
    )
}

export default VenueDetail;