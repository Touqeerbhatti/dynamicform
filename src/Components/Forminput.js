import React from "react";


const Forminput=(props)=>
{
    const{data}=props;



    return(
        <>
         <form>
           {data.map((fields)=>
           {
           return(
          <>
          <label>{fields.name}</label>
          <input type={fields.type}></input>
          </>
          )
          })}
          <input type="button" value="ADD" onClick="" />
          </form>

        </>
        )
}
export default Forminput;