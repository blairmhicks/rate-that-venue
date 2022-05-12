import React, {useEffect} from 'react'
import axios from 'axios';
//import {Link} from "react-router-dom"

const DisplayAll  = (props) => {

    const {venueList, setVenueList} = props;

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/venues")
        .then((response) => { 
            console.log(response)
            console.log(response.data.venues);
            setVenueList(response.data.venues);
        })
        .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <header>
                All Venues
            </header>
            {
                venueList.map((venue, index) => (
                    <div key={venue._id}>

                    </div>
        ))
            }
        </div>
    )

}

export default DisplayAll;