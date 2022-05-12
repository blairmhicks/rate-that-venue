import React, { useState } from 'react';
import axios from 'axios';
import VenueList from './VenueList';
const VenueForm = (props) => {
    const {venues, setVenues} = props;
    const [name, setName] = useState("")
    const [website, setWebsite] = useState("")
    const [address, setAddress] = useState("")
    const [score, setScore] = useState("")



    const submitHandler = (e) => {
        // prevent default refresh of browswer to keep our state from being reset
        e.preventDefault();
         //make a post request to create a new person
        axios.post('http://localhost:8000/api/venues', {
            name,    
            website, 
            address,
            score
        })
            .then((res)=>{
                console.log('res2',res); // always console log to get used to tracking your data!
                console.log(res.data);
                setVenues([...venues, res.data]);
            })
            .catch(err=>console.log('err2',err))

        //create a javascript object to hold all of the values
        const newVenue = {
            name: name,
            website: website,
            address: address,
            score: score
        };
        console.log("You have added", newVenue)
    };

    return(
        <>
        
        <form onSubmit={ submitHandler }>
            <div>
                <label>name: </label>
                <input type ="text" onChange={ (e) => setName(e.target.value) }/>
            </div>
            <div>
                <label> website: </label>
                <input type="text" onChange={ (e) => setWebsite(e.target.value) } />
            </div>
            <div>
                <label>address: </label>
                <input type="text" onChange={ (e) => setAddress(e.target.value) } />
            <div>
                <label>score: </label>
                <input type="number" onChange={ (e) => setScore(e.target.value) } />
            </div>
            <div>
                <input type="submit" value="Create" />
            </div>
            </div>
        </form>
        </>
    );
    };

export default VenueForm;
