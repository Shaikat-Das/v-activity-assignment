import React,{ useContext, useState } from 'react';
import { UserContext } from '../../App';
import DatePicker from "react-datepicker";
import {Form} from "react-bootstrap"


const Registration = () => {

    const [selectedDate, setSelectedDate] = useState();
    const [signedInUser, setSignedInUser] = useContext(UserContext);

    const handleSubmit= () => {

    }
    return (
        <div style={{textAlign:"center" }}>
             <h3>Welcome</h3><br/>
             <h2>{signedInUser.name}</h2>
           <p>Please complete the Registration form to be a volunteer</p> 

           <form action="/addRegistration" method="post">
                    <input type="text" placeholder="write your Name" name="name"></input>
                    <br></br>
                    <br></br>
                    <input type="email" placeholder="write your email address here" 
                    name="email"></input>
                    <br></br><br></br>
                    <p>SelectDate</p>
                    <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy" 
                    />
                   <br></br><br></br>
                   <p>DESCRIPTION</p><br></br>
                    <Form.Control
                        as="select" 
                        style={{maxWidth:500, marginLeft:700}}
                    >
                        <option value="0">Choose your activity</option>
                        <option value="1">River Clean</option>
                        <option value="2">Baby sit</option>
                        <option value="3">Child Support</option>
                        <option value="4">Good Education</option>
                        <option value="5">IT help</option>
                        <option value="6">Study Group</option>
                    </Form.Control>
                    <br></br>
                    <button onClick={handleSubmit} type="submit">Register Now</button>
            </form>

        </div>
    );
};

export default Registration;