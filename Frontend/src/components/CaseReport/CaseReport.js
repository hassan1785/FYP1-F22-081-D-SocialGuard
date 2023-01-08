import React from "react";
import classes from "./CaseReport.module.css"
import blackmail from "./blackmail.jpg";

const CaseReport = () => {

    function showImage() {
        document.getElementById('showbtn').style.display = "none";
        document.getElementById('showimg').style.display = "block"


    }


    function hideImage() {

        document.getElementById('showbtn').style.display = "block";
        document.getElementById('showimg').style.display = "none";

    }

    return (
        <>

            <div className={classes.maindiv}>
                <h1 className={classes.h1}> Case Report </h1>

                <h2 className={classes.h2}> Victim Name: Aliza Ali </h2>

                <h3 className={classes.h3}> Case Details </h3>

                <p className={classes.p1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br />
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br />
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>


                <img id='showimg' className={classes.img} onClick={hideImage} src={blackmail} />
                <button className={classes.btn} type="button" id="showbtn" onClick={showImage}>See Screenshots </button>


            </div>




        </>

    )
};

export default CaseReport;