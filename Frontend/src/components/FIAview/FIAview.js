import React from "react";
import classes from "./FIAview.module.css";

const FIAview = () => {


    return (
        <>

            <h1 className={classes.h1}> Registered Cases </h1>



            <div className={classes.divcase}>

                <table className={classes.headtable}>

                    <thead className={classes.headertable}>

                        <tr className={classes.tablerow}>
                            <th className={classes.table}> Case Number </th>
                            <th className={classes.table}> Victim </th>
                            <th className={classes.table}> Date of CaseRegisteration </th>
                            <th className={classes.table}> Severity </th>
                            <th className={classes.table}> Details </th>

                        </tr>

                    </thead>

                    <tbody className={classes.table}>
                        <tr className={classes.tablerow}>

                            <td className={classes.serialnum}> </td>
                            <td className={classes.table}> Aliza Ali </td>
                            <td className={classes.table}> 4/10/2022 </td>
                            <td className={classes.table}> High </td>
                            <td className={classes.table}> <a className={classes.link} href="./casereport" > More Details </a></td>

                        </tr>



                        <tr className={classes.tablerow}>

                            <td className={classes.serialnum}> </td>
                            <td className={classes.table}> Ammara Muiz</td>
                            <td className={classes.table}> 3/11/2022 </td>
                            <td className={classes.table}> Medium </td>
                            <td className={classes.table}><a className={classes.link} href="./casereport" > More Details </a> </td>

                        </tr>


                        <tr className={classes.tablerow}>

                            <td className={classes.serialnum}> </td>
                            <td className={classes.table}> Ali khan</td>
                            <td className={classes.table}> 9/11/2022 </td>
                            <td className={classes.table}> Low </td>
                            <td className={classes.table}> <a className={classes.link} href="./casereport" > More Details </a> </td>

                        </tr>


                        <tr className={classes.tablerow}>

                            <td className={classes.serialnum}> </td>
                            <td className={classes.table}> Zoha Tariq </td>
                            <td className={classes.table}> 6/10/2022 </td>
                            <td className={classes.table}> Low </td>
                            <td className={classes.table}> <a className={classes.link} href="./casereport" > More Details </a> </td>

                        </tr>




                    </tbody>








                </table>

            </div>


        </>
    )
};
export default FIAview

