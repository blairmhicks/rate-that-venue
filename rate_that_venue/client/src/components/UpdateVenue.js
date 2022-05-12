import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateVenue = (props) => {
    const { id } = useParams();
    const [name, setName] = useState();
    const [website, setWebsite] = useState();
    const [address, setAddress] = useState();
    const [score, setScore] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/venues/${id}`)
            .then((res) => {
                setName(res.data.name);
                setWebsite(res.data.website);
                setAddress(res.data.address);
                setScore(res.data.score);
            })
            .catch((err) => console.log(err))
    }, [])
    const updateVenue = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/venues/${id}`, {
            name,
            website,
            address,
            score
        })
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>Update a venue</h1>
            <form onSubmit={ updateVenue }>
            <div>
                <label>name: </label>
                <input type ="text" 
                name="venue name"
                value={name}
                onChange={ (e) => setName(e.target.value) }/>
            </div>
            <div>
                <label> website: </label>
                <input type="text" 
                name="website"
                value={website}
                onChange={ (e) => setWebsite(e.target.value) } />
            </div>
            <div>
                <label>address: </label>
                <input type="text" 
                name="address"
                value={address}
                onChange={ (e) => setAddress(e.target.value) } />
            <div>
                <label>score: </label>
                <input type="number" 
                name="score"
                value={score}
                onChange={ (e) => setScore(e.target.value) } />
            </div>
            <div>
                <input type="submit" value="Edit" />
            </div>
            </div>
        </form>
        </div>
    )
}

export default UpdateVenue;