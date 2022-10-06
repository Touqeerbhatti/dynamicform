import React, { useState } from "react";
import Data from "./Data";
import Forminput from "./Forminput";
import Table from "./Table";

const Form=()=>
{
  const[getdata,setgetdata]=useState([]);

  return(
  <>
  <h1>
    Hellow Form
  </h1>
  <Forminput data={Data} getapi={setgetdata} />
  <br>
  </br>
  <Table postapi={getdata} />
  </>   
   
  )
}

export default Form;