import React, { useEffect, useState } from "react";
import classes from './Admin.module.css';
import Axios from 'axios';
const Admin = () => {
    const [cases, setCases] = useState([]);
    const [users, setUsers] = useState([]);

    const getCases = async () => {
        const cases = await Axios.get("http://localhost:4000/getCases", {
        });
        console.log(cases)
        setCases(cases.data);

    }
    const getAllCases = async () => {
        const cases = await Axios.get("http://localhost:4000/getAllCases", {
        });
        console.log(cases)
        setCases(cases.data);

    }
    const getUsers = async () => {

        const users = await Axios.get("http://localhost:4000/getUsers", {
        });
        console.log(users)
        setUsers(users.data);

    }


    const delCase = async (caseid) =>{
        console.log(caseid)
        const respons= await Axios.post('http://localhost:4000/delCase', {_id:caseid});
        getCases()
    }

    const delUser = async (userid) =>{
        const respons= await Axios.post('http://localhost:4000/delUser', {_id: userid});
        getUsers()
    }

    useEffect(() => {
        //getCases();
    }, [])

    const logoutUser = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("isLoggedin");
        window.location.href = "/";
    }


    return (
        <>

            <h1 className={classes.heading1}> Hello Admin </h1>

            <div className={classes.buttondiv}>

                <button className={classes.btn} onClick={getUsers}> Get Users</button>

                <button className={classes.btn} onClick={getCases} > Active Cases</button>
                <button className={classes.btn} onClick={getAllCases} > All Cases</button>

                <button className={classes.btn} onClick={logoutUser}> Logout</button>
            </div>


            <div className={classes.cases}>
                <h2 className={classes.heading}>Cases</h2>
            </div>
            <div className={classes.casediv}>
                <table className={classes.casetable}>
                    <tr>
                        <th className={classes.table}>ID</th>
                        <th className={classes.table}>User ID</th>
                        <th className={classes.table}>Case Details</th>
                        <th className={classes.table}>Suspect</th>
                        <th className={classes.table}>Incident Date</th>
                        <th className={classes.table}>Status</th>
                        <th className={classes.table}>Evidence</th>
                        <th className={classes.table}>Date Reported</th>
                        <th className={classes.table}>Manage</th>

                    </tr>

                    {
                        cases.map((case1, index) => {
                            return (
                                <tr className={classes.tablerow}>
                                    <td> {case1._id} </td>
                                    <td> {case1.userId} </td>
                                    <td> {case1.crimeDetails} </td>
                                    <td> {case1.suspect} </td>
                                    <td> {case1.incidentDate} </td>
                                    <td> {case1.caseStatus} </td>
                                    <td> {case1.evidences + " "} </td>
                                    <td> {case1.createdAt} </td>
                                    <td><button className={classes.btn} onClick={()=>delCase(case1._id)}>Discard Case</button></td>

                                </tr>

                            )


                        })
                    }


                </table>

            </div>

            <div className={classes.users}>
                <h2 className={classes.heading}>Users</h2>
            </div>
            <div className={classes.userdiv}>
                <table className={classes.casetable}>

                    <thead className={classes.headertable}>
                        <tr>
                            <th className={classes.table}>User</th>
                            <th className={classes.table}>ID</th>
                            <th className={classes.table}>Email</th>
                            <th className={classes.table}>Name</th>
                            <th className={classes.table}>Role</th>
                            <th className={classes.table}>Manage</th>


                        </tr>
                    </thead>

                    {
                        users.map((user, index) => {
                            return (
                                <tr>
                                    <td> {index + 1} </td>
                                    <td> {user._id}</td>
                                    <td> {user.email} </td>
                                    <td> {user.fname + " " + user.lname} </td>
                                    <td> {user.role}</td>
                                    <td><button className={classes.btn} onClick={() => delUser(user._id)}>Discard User</button></td>
                                </tr>

                            )


                        })
                    }


                </table>
            </div>




            {/* <div >
                        {
                            users.map((user, index) => {
                                return (
                                    <div >
                                        <h3 className={classes.heading}>User {index + 1}</h3>
                                        <p className={classes.para}>User ID: {user._id}</p>
                                        <p className={classes.para}>Name: {user.fname + " " + user.lname}</p>
                                        <p className={classes.para}>Email: {user.email}</p>
                                        <p className={classes.para}>Role: {user.role}</p>
                                    </div>
                                )
                            })
                        }
                    </div> */}


        </>


    )
};

export default Admin;