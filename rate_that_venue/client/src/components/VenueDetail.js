import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom'



const VenueDetail = () => {

    const [venue, setVenue] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/venues/${id}`)
            .then((res) => {
                console.log(res.data);
                setVenue(res.data);
            })
            .catch((err) => console.log(err))
    }, [id])

    const deleteFilter = (e)=>{
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/venues/${id}`)
            .then((res)=>{
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => console.log(err))
    }

    return (
        <center>
            <Link to ={"/"}>Home</Link>
            <h1>{venue.name}</h1>
            <p>Website: <a href={`https://${venue.website}`}> {venue.website} </a></p>
            <p>Address: {venue.address}</p>
            <p>Score: {venue.score}</p>
            <p>Review: {venue.review}</p>
            <p>
                <Link to={`/venues/edit/${venue._id}`} class="btn btn-primary"> Edit Venue </Link> <br/> <br/>
                <button class="btn btn-primary" onClick={deleteFilter}>Delete Venue</button>

            </p>
        </center>
    )
}

export default VenueDetail;