import React from "react";
import { Link } from "react-router-dom";




const Home=()=>
{
  return(
    <>
    <h1>
      Hellow  Home
    </h1>

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Form">Form</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Table">Table</Link>
        </li>
      </ul>
    </nav>

    </>
  )
}

export default Home;