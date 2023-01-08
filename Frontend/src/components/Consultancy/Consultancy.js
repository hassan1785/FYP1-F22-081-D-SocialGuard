import React from "react";
import Navbar from "../Navbar/Navbar.js"
import classes from './Consultancy.module.css'
import C1 from "./C1.jpg"


const Consultancy = () => {

    return (
        <>
            <Navbar />

            <h1 className={classes.h1}> You don't have to suffer in silence </h1>

            <div className={classes.divhead}>
                <h3> Pakistan has one of the highest mental illness rates in the world — A 2016
                    article by DAWN says around 50 million Pakistanis suffer from mental issues.</h3>

                <h4> Reach out to one of the highest qualified mental health experts today and get the solutions to whatever’s bothering you</h4>
                <h4> Asking for help does not make you weak, book an appointment today, our team cares for you! </h4>


                <div className={classes.heart}> </div>








            </div>


            <div className={classes.div1}>
                <img className={classes.pic} alt="img" src={C1} />

                <h2> Dr Mushtaq Khan </h2>
                <h3> Doctor of Psychology</h3>
                <h4> Available Monday - Thursday </h4>
                <h4> Time 1pm-4pm </h4>
                <button className={classes.btn} > Book now </button>






            </div>


            <div className={classes.div1}>
                <img className={classes.pic} alt="img" src={C1} />

                <h2> Dr Hassan Khan </h2>
                <h3> Doctor of Psychology</h3>
                <h4> Available Monday - Wednesday </h4>
                <h4> Time 4pm-7pm </h4>
                <button className={classes.btn} > Book now </button>

            </div>


        </>



    )




}
export default Consultancy;
