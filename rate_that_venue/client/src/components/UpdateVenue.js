import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const UpdateVenue = () => {

    const { id } = useParams();
    const [name, setName] = useState();
    const [website, setWebsite] = useState();
    const [address, setAddress] = useState();
    const [score, setScore] = useState();
    const [review, setReview] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/venues/${id}`)
            .then((res) => {
                setName(res.data.name);
                setWebsite(res.data.website);
                setAddress(res.data.address);
                setScore(res.data.score);
                setReview(res.data.review);
            })
            .catch((err) => console.log(err))
    }, [id])

    const updateVenue = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/venues/${id}`, {
            name,
            website,
            address,
            score,
            review
        })
            .then((res) => {
                console.log(res);
                navigate(`/venues/${id}`);
            })
            .catch((err) => console.log(err))
    }

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
            <h1>Update a venue:</h1>
            <form onSubmit={ updateVenue }>
            <div>
                <label>name: </label>
                <input type ="text" 
                name="venue name"
                value={name}
                onChange={ (e) => setName(e.target.value) }/>
            </div>
            <br/>
            <div>
                <label> website: </label>
                <input type="text" 
                name="website"
                value={website}
                onChange={ (e) => setWebsite(e.target.value) } />
            </div>
            <br/>
            <div>
                <label>address: </label>
                <input type="text" 
                name="address"
                value={address}
                onChange={ (e) => setAddress(e.target.value) } />
            </div>
            <br/>
            <div>
                <label>score: </label>
                <input type="number" 
                name="score"
                value={score}
                onChange={ (e) => setScore(e.target.value) } />
            </div>
            <br/>
            <div>
                <label>review: </label>
                <input type="text" 
                name="review"
                value={review}
                onChange={ (e) => setReview(e.target.value) } />
            </div>
            <br></br>            
            <div>
                <input type="submit" class="btn btn-primary" value="Save Changes" /> <br/> <br/>
                <button class="btn btn-primary" onClick={deleteFilter}>Delete Venue</button><br/> <br/>
                <Link to={"/"} class ="btn btn-primary">Cancel</Link>                 
            </div>
        </form>
        </center>
    )
}

export default UpdateVenue;