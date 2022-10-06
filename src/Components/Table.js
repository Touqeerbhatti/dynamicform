import React, { useState } from "react";
// import tabledata from "./Tabledata";
import '../Components/table.css';

const Table=(props)=>
{ 
    return(
        <>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            </tr>
            
            {props.postapi.map((iteration)=>
            {
                return(
                    <>
                    <tr>
                    <td>{iteration.uname}</td>
                    <td>{iteration.email}</td>
                    <td>{iteration.password}</td>
                    </tr>
                    </>
                )
            })}
 
        </>
    )
}
export default Table;