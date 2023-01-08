import React from "react";
import classes from './About.module.css';



const About = () => (


    <>






        <div className={classes.Home}>
            <h1 className={classes.myH1}>About us</h1>



        </div>

        <div className={classes.Paradiv} id="paradiv">



            <p className={classes.p1}>  Considering the current online environment, issues like cyber harassment and hate speech are on the rise. <br /> SocialGuardian thus aims to create a safe cyberspace for netizens online. By using Machine Learning and Natural Language Processing (NLP)</p>

            <p className={classes.p1}>SocialGuardian determines the context of online chats, and calculates a severity rating for each case. <br></br>
                These cases are then redirected to the FIA on a priority-basis</p>
            <p className={classes.p1}>We also offer support for victims through our online therapy portal which connects victims to mental health experts and qualified therapists. <br></br>
                In this way, we believe SocialGuardian will let internet users feel more confident and safe in the cyberspace</p>


        </div>

















    </>

);



export default About;
