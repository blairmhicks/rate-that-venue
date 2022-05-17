import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useNavigate, Link } from 'react-router-dom'

const VenueForm = (props) => {
    const [name, setName] = useState("")
    const [website, setWebsite] = useState("")
    const [address, setAddress] = useState("")
    const [score, setScore] = useState("")
    const [review, setReview] = useState("")
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    // const setField = (field, value) => {
    //     setForm({
    //         ...form,
    //         [field]:value
    //     })

    //     if(!!errors[field])
    //     setErrors({
    //         ...errors,
    //         [field]:null
    //     })
    // }
    // const validateForm = () =>{
    //     const { name, website, address, score, review } = form
    //     const newErrors = {}

    //     if(!name || name === '') 
    //         newErrors.name = 'Please enter a venue name'
    //     else if (name.length < 6)
    //         newErrors.name = 'Venue name must be at least 6 characters'
    //     if(!website || website === '')
    //         newErrors.website = 'Please enter a venue website'
    //     if(!address || address === '')
    //         newErrors.address = 'Please enter a venue address'
    //     else if (address.length < 6)
    //         newErrors.address = 'Address must be at least 6 characters long'
    //     if (!score || score === '' || score < 1 || score > 10 )
    //         newErrors.score = 'Please enter a 1-10 score for the venue'
    //     if (!review || review === '')
    //         newErrors.review = 'Tell us how you feel! Please write a review of the venue'
    //     else if (review.length < 6 ) 
    //         newErrors.review = 'Your review must be at least 6 characters'

    //     return newErrors
    // }

    const submitHandler = (e) => {
        // prevent default refresh of browser to keep our state from being reset
         //make a post request to create a new venue
        e.preventDefault()
        // const formErrors = validateForm()
        //     if(Object.keys(formErrors).length > 0){
        //         setErrors(formErrors)
        //     }else{
        //         console.log('form submitted')
        //         console.log(form)
        //     }

        axios.post('http://localhost:8000/api/venues', {
            name,    
            website, 
            address,
            score,
            review
        })
            .then((res)=>{
                console.log('res2',res); 
                console.log(res.data);
                navigate("/")
            })
            .catch(err=>console.log('err2',err))

        //create a javascript object to hold all of the values
        const newVenue = {
            name: name,
            website: website,
            address: address,
            score: score,
            review: review
        };
        console.log("You have added", newVenue)

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);


    };

    return(
        <center>
        <Form noValidate validated={validated} onSubmit={ submitHandler }> 
            <Form.Group as={Col} lg ="2" controlId='validationName'>
                <Form.Label>Name:  </Form.Label>
                <Form.Control 
                    required
                    input type ="text" 
                    minlength="6" 
                    maxlength="30"
                    onChange={ (e) => setName(e.target.value) }
                    />
                <Form.Control.Feedback type='invalid'>
                    Please enter a venue name that is at least 6 characters
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label> Website:  </Form.Label>
                <Form.Control 
                    input type="text" 
                    required="required"
                    onChange={ (e) => setWebsite(e.target.value) } />
                <Form.Control.Feedback type='invalid'>
                    Please enter a website name
                </Form.Control.Feedback>                 
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Label>Address: </Form.Label>
                <Form.Control input type="text" 
                    required="required" 
                    minlength="10" 
                    maxlength="40"
                    onChange={ (e) => setAddress(e.target.value) } />
                <Form.Control.Feedback type='invalid'>
                    Please enter an address
                </Form.Control.Feedback>      
            </Form.Group>
            <Form.Group>
            <br></br>
                <Form.Label>Score:  </Form.Label>
                <Form.Control 
                    input type="number" 
                    required="required" 
                    min="1" 
                    max="10"
                    onChange={ (e) => setScore(e.target.value) } /> 
                <Form.Control.Feedback type='invalid'>
                    Please enter a whole number score between 1 and 10
                </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Label>Review:  </Form.Label>
                <Form.Control 
                    textarea rows="4" 
                    required="required" 
                    minlength="6"
                    maxlength="120"
                    onChange={ (e) => setReview(e.target.value) } /> 
                <Form.Control.Feedback type='invalid'>
                    Please explain your rating with a short review.
                </Form.Control.Feedback>    
            <br></br>
                <input type="submit" class="btn btn-primary" value="Add Venue" />
            </Form.Group>
        </Form>
        </center>
    );
};

export default VenueForm;


    // return(
    //     <center>
    //         <Link to ={"/"}>Home</Link>
    //         <h1>Add A Venue!</h1>
    //         <form onSubmit={ submitHandler } > 
    //             <center>
    //                     <label>Name:  </label>
    //                     <input type ="text" required="required"  minlength="6" maxlength="30"
    //                     onChange={ (e) => setName(e.target.value) } />
    //             </center>
    //             <br></br>
    //             <center>
    //                 <label> Website:  </label>
    //                 < input type="text" required="required"
    //                 onChange={ (e) => setWebsite(e.target.value) } />
    //             </center>
    //             <br></br>
    //             <center>
    //                 <label>Address: </label>
    //                 < input type="text" required="required" minlength="10" maxlength="40"
    //                 onChange={ (e) => setAddress(e.target.value) } />
    //             </center>
    //             <br></br>
    //             <center>
    //                 <label>Score:  </label>
    //                 < input type="number" required="required" min="1" max="10"
    //                 onChange={ (e) => setScore(e.target.value) } />
    //             </center>
    //             <br></br>
    //             <center>
    //                 <label>Review:  </label>
    //                 < textarea rows="4" required="required" minlength="6" maxlength="120"
    //                 onChange={ (e) => setReview(e.target.value) } />
    //             </center>
    //             <br></br>
    //                 <input type="submit" class="btn btn-primary" value="Add Venue" />
    //         </form>
    //     </center>
    // );
