import userEvent from "@testing-library/user-event";
import axios from "axios";
import React, { useState } from "react";
import classes from './Contact.module.css'

const Contact = () => {

    const [complain, setComplain] = useState("")

    const onComplainChange = (e) => {
        setComplain(e.target.value);


    }

    const onComplainSubmit = (e) => {

        e.preventDefault();
        console.log(complain);



        axios.post("http://localhost:4000/complain", complain)
            .then(res => { console.log(res) })



    }
    return (
        <>



            <div className={classes.main}>

                <h1 className={classes.h1}> We Would Love to Hear From You</h1>

                <p> Email our female representative <a className={classes.emails} href="mailto:i191997@nu.edu.pk"> Here </a>

                </p>
                <p> Email our male representative <a className={classes.emails} href="mailto:i191785@nu.edu.pk"> Here </a>

                </p>





                <p>Leave us a note to help us do better!</p>
                <form id="contactform" onSubmit={onComplainSubmit}>
                    <textarea maxLength={"500"} className={classes.complain} onChange={onComplainChange} name="complain" value={complain} placeholder="Type here..." ></textarea>



                </form>

                <button className={classes.submitbtn} type="submit" form="contactform"> SUBMIT </button>

            </div>

        </>

    )
};
export default Contact;