import React, { useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'



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
    }, [setVenues])


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
        <Table>
            <thead>
                <tr>
                    <th>Venue Name</th>
                    <th>Website</th>
                    <th>Score</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                venues.map((venue, index) => {
                return (
                    <tr key={index}>
                        <td><Link to={`/venues/${venue._id}`}> {venue.name} </Link></td>
                        <td><a href={`https://${venue.website}`} > {venue.website} </a></td>
                        <td>{venue.score}</td>
                        <td><Link to={`/venues/edit/${venue._id}`} class="btn btn-primary"> Edit </Link></td>
                        <td><button onClick={(e) => {deleteVenue(venue._id)}} class="btn btn-primary">Delete</button></td>
                    </tr>
                )})
            }
            </tbody>
        </Table>
    )
}



export default VenueList
