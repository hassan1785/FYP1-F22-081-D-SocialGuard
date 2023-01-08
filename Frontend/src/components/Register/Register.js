import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import classes from './Register.module.css';
import { useHistory } from "react-router-dom";
import axios, { Axios } from 'axios';

const Login = () => {


    let history = useHistory();


    const [iserror, setiserror] = useState("")






    const [user, setUser] = useState({

        fname: "",
        lname: "",
        dob: "",
        cnic: "",
        gender: "",
        address: "",
        phone: "",
        email: "",
        password: "",
        verifypassword: ""


    })

    const handleChange = (e) => {

        const { name, value } = e.target;
        console.log(name, value)
        setUser({
            ...user,
            [name]: value
        })



    }


    const confirmPass = () => {

        if (user.password == user.verifypassword) {

            setiserror("Password match")
            document.getElementById('message').style.color = 'green'


        }
        else {
            setiserror("Password do not match")
            document.getElementById('message').style.color = 'red'


        }
    }






    const onFormSubmit = (e) => {
        e.preventDefault();



        const { fname, lname, dob, gender, email, password, cnic, address, phone, verifypassword } = user
        if (fname && lname && dob && gender && email && cnic && password && address && phone && (password === verifypassword)) {

            axios.post("http://localhost:4000/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push('./login')
                })


        } else {
            alert('Something missing')
        }



    }




    return (
        <>




            <h1 className={classes.LoginH1}>REGISTER A NEW ACCOUNT</h1>




            <div className={classes.headdiv}>

                <div className={classes.login}>
                    <form id="Login-Form" onSubmit={onFormSubmit}>



                        <p>
                            <label id="fname" className={classes.labeltag}> First name </label>
                            <input className={classes.fname} type="text" name="fname" id="fname" value={user.fname} onChange={handleChange} />
                        </p>




                        <p>
                            <label id="lname" className={classes.labeltag}> Last Name </label>
                            <input type="text" name="lname" id="lname" value={user.lname} onChange={handleChange} />
                        </p>



                        <section>

                            <p>
                                <label id="dob" className={classes.labeltag}> Date of Birth </label>
                                <input type="date" name="dob" id="dob" value={user.dob} onChange={handleChange} />
                            </p>


                            <label id="cnic" className={classes.labeltag}> CNIC </label>
                            <input type="text" name="cnic" title="The input should be 13 digits" pattern="[0-9]{13}" id="cnic" value={user.cnic} onChange={handleChange} />

                        </section>

                        <section>
                            <p>
                                <label id="gender" className={classes.labeltag}> Gender </label>
                                <select id="gender" value={user.gender} name="gender" onChange={handleChange} >
                                    <option> Male </option>
                                    <option> Female </option>
                                    <option> Transgender </option>
                                    <option> Prefer Not to Say </option>

                                </select>
                            </p>
                        </section>

                        <section>
                            <p>
                                <label id="address" className={classes.labeltag}> Address </label>
                                <input type="address" id="address" name="address" value={user.address} onChange={handleChange} />
                            </p>
                        </section>

                        <section>
                            <p>
                                <label id="phone" className={classes.labeltag}> Contact Number </label>
                                <input type="phone" title="Phonenumber should be 11 digits" pattern="[0-9]{11}" id="phone" name="phone" value={user.phone} onChange={handleChange} />
                            </p>
                        </section>




                        <section>
                            <p>
                                <label id="email" className={classes.labeltag}> Email ID </label>
                                <input type="email" id="email" name="email" value={user.email} onChange={handleChange} />
                            </p>
                        </section>


                        <p>
                            <label id="password" className={classes.labeltag}> Password </label>
                            <input type="password" id="password" name="password" value={user.password} onChange={handleChange} />
                        </p>


                        <label id="verifypassword" className={classes.labeltag}> Confirm Password   </label>
                        <input type="password" id="verifypassword" name="verifypassword" value={user.verifypassword} onKeyUp={confirmPass} onChange={handleChange} />

                        <p className={classes.errorp} >
                            <span id="message">{iserror}</span>
                        </p>


                        {/* <label id="email"> Email here </label>
                <input type="password" name="password" value={password} onChange={onPasswordChange} />

                <label id="email"> Email here </label>
                <input type="password" name="password" value={password} onChange={onPasswordChange} />

                <label id="email"> Email here </label>
                <input type="password" name="password" value={password} onChange={onPasswordChange} /> */}


                    </form>



                </div>




            </div>




            <a className={classes.helo} href="./login">
                <button className={classes.Register} type="submit" form="Login-Form">Register to login</button>
            </a>






        </>

    )
}


export default Login;