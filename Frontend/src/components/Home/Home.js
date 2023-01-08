import React from "react";
import classes from './Home.module.css';
import sg1 from './sg1.png';

const Home = () => (
    <>



        <div className={classes.imagediv}>
            <img className={classes.logo} alt="logo img " src={sg1} />
            <div className={classes.headdiv}>
                <h1 className={classes.Heading}> SocialGuardian</h1>


                <a className={classes.a} href="./login">

                    <button className={classes.regbtn}>  Get Started </button>

                </a>
            </div>
        </div>




        {/* <footer className={classes.footer}>



            <p className={classes.p1}>  All copy rights reserved © </p>
        </footer> */}





    </>
);

export default Home;