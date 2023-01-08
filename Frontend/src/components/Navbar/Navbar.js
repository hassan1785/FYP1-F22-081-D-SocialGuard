import React from "react";
import classes from '../EditProfile/EditProfile.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    const logoutUser = () => {

        window.localStorage.removeItem("token");
        window.localStorage.removeItem("isLoggedin");
        window.location.href = "/";
    }

    return (
        <>



            <nav className={classes.navbar}>



                <ul className={classes.ul}>



                    <li className={classes.links}>
                        <Link to='./services'> How we work </Link>
                    </li>


                    <li className={classes.links}>
                        <Link to='./editprofile'> Update Profile </Link>
                    </li>

                    <li className={classes.links}>
                        <Link to='./caseregister'> Register a Case </Link>
                    </li>

                    <li className={classes.links}>
                        <Link to='./consultant'> Consultancy Service </Link>
                    </li>

                    <li className={classes.links}>
                        <Link onClick={logoutUser}> Logout </Link>
                    </li>



                </ul>


            </nav>



        </>


    )
}

export default Navbar;