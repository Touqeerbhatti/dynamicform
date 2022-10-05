import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Form from "./Components/Form";


const App=()=>
{
  return(
    <>
    <h1>
      Hellow  App
    </h1>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Form" element={<Form/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
    </>
  )
}

export default App;