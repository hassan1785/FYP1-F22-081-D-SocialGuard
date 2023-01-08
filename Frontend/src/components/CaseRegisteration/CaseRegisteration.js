import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.js"
import classes from './CaseRegisteration.module.css';
const MAX_LENGTH = 2;

const CaseRegisteration = () => {

    const [crimeDetails, setCrimeDetails] = useState("");
    const [suspectDetails, setSuspectDetails] = useState("");
    const [dateOfCrime, setDOC] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState([]);


    const onSuspectChange = (e) => {
        setSuspectDetails(e.target.value);
    }

    const onDocChange = (e) => {
        setDOC(e.target.value);
    }

    const onCrimeChange = (e) => {
        setCrimeDetails(e.target.value);
    }


    const onSubmitForm = (e) => {

        e.preventDefault();
        const files = e.target.evidence.files
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const formData = new FormData();
        if (files.length > MAX_LENGTH) {
            alert(`Cannot upload files more than ${MAX_LENGTH}`);
            return;
        }
        else if (files.length != 0) {
            for (let i = 0; i < files.length; i++) {
                console.log(files[i])
                formData.append('evidence', files[i]);
            }
        }
        formData.append('incidentDate', dateOfCrime);
        formData.append('suspect', suspectDetails);
        formData.append('crimeDetails', crimeDetails);
        formData.append('userId', userId);


        fetch('http://localhost:4000/uploadCase', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);

                }
                else {
                    alert(data.message);
                }
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }

    function enabledisbale(evidence) {
        let btnSubmit = document.getElementById("evidence");

        if (uploadedFiles.length > MAX_LENGTH) {
            isDisabled(true)
        }
        else {
            isDisabled(false);
        }

    }

    useEffect(() => {
        fetch("http://localhost:4000/getCases", {
            method: "GET",
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])





    return (

        <>
            <Navbar />
            <div className={classes.maindiv}>
                <h1 className={classes.h1}> Register A New Case </h1>

                <div className={classes.instructiondiv}>
                    <p className={classes.p1}> Please follow the instructions below to detect harassment</p>
                    <ul>

                        <li className={classes.instructionbullet}>
                            Give case details in a paragraph form
                        </li>
                        <li className={classes.instructionbullet}>
                            Upload evidence in the form of <b>SCREENSHOTS</b>
                            <ul>
                                <li className={classes.instructionbullet}>
                                    The screenshots should only be of chatting
                                </li>
                                <li className={classes.instructionbullet}>
                                    The text should be in English
                                </li>
                                <li className={classes.instructionbullet}>
                                    Do not blur out any details
                                </li>

                            </ul>
                        </li>
                    </ul>
                </div>


                <div className={classes.uploaddiv}>


                    <form id="Detect-form" onSubmit={onSubmitForm} enctype="multipart/form-data">
                        <div className={classes.box}>
                            <label className={classes.label} id="textarea"> Crime Details</label>
                            <textarea className={classes.textarea} placeholder="Details of the crime and involved person(s)" maxLength={3400} value={crimeDetails} onChange={onCrimeChange}></textarea>
                        </div>

                        <label className={classes.label} id="suspect">Your Suspect</label>
                        <input className={classes.inputarea} placeholder="Suspected persons." maxLength={150} value={suspectDetails} onChange={onSuspectChange}></input>

                        <label className={classes.label} id="crimeDate"> Date of Crime</label>
                        <input className={classes.doc} type="date" name="dateOfCrime" id="doc" value={dateOfCrime} onChange={onDocChange} />





                        <p>
                            <input className={classes.uploadpic} name="evidence" id="evidence" type="file" multiple accept='.png ,.jpg' ></input>
                        </p>



                        <button className={classes.submitbtn} disabled={enabledisbale} type="submit" >Submit</button>
                    </form>



                </div>




            </div>





        </>










    )







};

export default CaseRegisteration;