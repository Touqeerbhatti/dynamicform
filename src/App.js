import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Table from "./Components/Table";

const App=()=>
{
  return(
    <>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Form" element={<Form/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Table" element={<Table/>} />
    </Routes>
    </>
  )
}

export default App;