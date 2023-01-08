import React from "react";
import classes from './Services.module.css'

const Services = () => (

    <>

        <div className={classes.Headdiv}>



            <div className={classes.S1}>

                <h1 className={classes.H1}> Cyber Harassment Case Analysis </h1>
                <p className={classes.p1}> SocialGuardian analyzes cases with the aid of Natural Language Processing (NLP), <br /> Machine Learning (ML) models, and context awareness features. <br />
                    Our primary system extracts text from the provided evidence, <br /> which can be screenshots of chats or comments, in order to analyze it further. <br />
                    Similarly, SocialGuardian determines whether the user has provided <br /> sufficient legitimate evidence for the case to be redirected to <br /> higher investigative authorities.
                    In addition to this, these cases are categorized by <br /> their type and severity level </p>





                <h1 className={classes.H2}> Verified Case Referrals To the FIA </h1>
                <p className={classes.p1}> SocialGuardian analyzes each case along with its evidence in order to verify it.<br />
                    Once the provided evidence  is analyzed and checked for adequacy, <br /> each case is categorized and labelled with a severity rating.<br />
                    These cases are then redirected for further investigation to the  <br /> Cyber Crime Wing
                    of the Federal Investigation Agency (FIA) <br /> based on their priority or severity rating. </p>


            </div>

            <div className={classes.S1}>

                <h1 className={classes.H3}> A Platform To Connect With Mental Health Experts </h1>
                <p className={classes.p1}> We, as humans, all need emotional support. Whether or not each case is considered  <br />severe by the investigative
                    authorities for prompt action against the culprits,<br /> we believe that any form of cyber harassment may leave a lasting impact on victims. <br />
                    In such circumstances, it is good to consult, vent, or even talk to <br /> someone who is there to listen.
                    Therefore, with a click of a button, <br /> SocialGuardian allows you to connect with qualified mental health experts <br />
                    who are there to not only listen to what you have to say but also to offer<br /> practical solutions to help you feel relieved and supported. </p>





                <h1 className={classes.H4}> Automate Appointments With Therapists</h1>
                <p className={classes.p1}> Your health and emotional wellness should be your priority. If you still feel overwhelmed <br /> after a one-to-one chat session, do not
                    let any thoughts or fears hold you back any longer. <br /> Right from the SocialGuardian platform, choose a day as per your availability,
                    and <br />  SocialGuardian will automatically notify you after scheduling your appointment with <br />  one of our qualified mental health experts.
                    It doesn’t get more convenient, effective, and flexible than this! </p>



            </div>


        </div>



    </>

);
export default Services;
