import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import classes from './Login.module.css';
import axios from "axios";


const Logging = ({ setLoginUser }) => {


    let history = useHistory();



    const [user, setUser] = useState({

        email: "",
        password: ""


    })
    const handleChange = (e) => {

        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })



    }

    const onFormSubmit = (e) => {

        e.preventDefault();
        console.log(user.email, user.password)

        const { email, password } = user
        if (email && password) {
            // alert('posted')
            axios.post("http://localhost:4000/login", user)
                .then(res => {
                    setLoginUser(res.data.user)

                    if (res.data.user.role === "Admin") {
                        history.push("/admin")
                        alert(res.data.message)
                        localStorage.setItem('user', JSON.stringify(res.data.user))
                        localStorage.setItem('token', res.data.token)
                        localStorage.setItem('isLoggedin', true);
                    }
                    else {
                        history.push("/welcome")
                        alert(res.data.message)
                        localStorage.setItem('user', JSON.stringify(res.data.user))
                        localStorage.setItem('token', res.data.token)
                        localStorage.setItem('isLoggedin', true);
                    }


                    //window.location.href = "/welcome";
                })
        }
        else {
            alert('something missing')
        }






    }




    return (
        <>

            <div className={classes.Maindiv} >

                <h1 className={classes.H1}> Sign in </h1>

                {console.log(user)}
                <form id="logging" onSubmit={onFormSubmit}>

                    <p>
                        <label className={classes.lables} id="email"> Email </label>
                        <input className={classes.input} type="email" name="email" id="email" value={user.email} onChange={handleChange} required placeholder="Type Email Here"></input>
                    </p>

                    <p>
                        <label className={classes.lables} id="password"> Password </label>
                        <input className={classes.input} type="password" name="password" id="password" value={user.password} required onChange={handleChange} placeholder="Type Password here"></input>
                    </p>
                </form>

                <button className={classes.button} type="Submit" form="logging"> Sign In</button>


                <a href="./register">
                    <button className={classes.createbtn}> Create Account</button>
                </a>







            </div>



        </>
    )

};


export default Logging;