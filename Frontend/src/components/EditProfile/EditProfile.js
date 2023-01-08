import React, { useState } from "react";
import classes from './EditProfile.module.css';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js"

const EditProfile = () => {

    const [email, setemail] = useState("")

    const [phone, setphone] = useState("")

    const [address, setaddress] = useState("")

    const [password, setpassword] = useState("")

    const [verifypassword, setverifypassword] = useState("")



    const onEmailChange = (e) => {
        setemail(e.target.value);

    }


    const onPhoneChange = (e) => {
        setphone(e.target.value);

    }
    const onAddressChange = (e) => {
        setaddress(e.target.value);

    }
    const onPasswordChange = (e) => {
        setpassword(e.target.value);

    }
    const onVerifyPasswordChange = (e) => {
        setverifypassword(e.target.value);

    }



    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(phone, address, email, password, verifypassword);

    }
    return (
        <>

            <Navbar/>

            <h1 className={classes.h1}> Update profile </h1>

            <div className={classes.updatediv}>

                <h2 className={classes.h2}> Please fill in the box you wish to change</h2>


                <form id="update-form" onSubmit={onFormSubmit}>


                    <section>
                        <p>
                            <label id="address" className={classes.labeltag}> New Address </label>
                            <input className={classes.input} type="address" id="address" name="address" value={address} onChange={onAddressChange} />
                        </p>
                    </section>

                    <section>
                        <p>
                            <label id="phone" className={classes.labeltag}> New Contact Number </label>
                            <input className={classes.input} type="phone" id="phone" name="phone" value={phone} onChange={onPhoneChange} />
                        </p>
                    </section>




                    <section>
                        <p>
                            <label id="email" className={classes.labeltag}> New Email ID </label>
                            <input className={classes.input} type="email" id="email" name="email" value={email} onChange={onEmailChange} />
                        </p>
                    </section>


                    <label id="password" className={classes.labeltag}> New Password </label>
                    <input className={classes.input} type="password" id="password" name="password" value={password} onChange={onPasswordChange} />


                    <label id="password" className={classes.labeltag}> Verify Password </label>
                    <input className={classes.input} type="password" id="password" name="password" value={verifypassword} onChange={onVerifyPasswordChange} />




                </form>

                <button className={classes.updatebtn} type="submit" form="update-form">Update</button>


            </div>





        </>

    )
};

export default EditProfile;