import React, { useState } from "react";


const Forminput=(props)=>
{
    const{data,getapi}=props;

  const [tname,setname]=useState({uname:'',email:'',password:''});


  const onsubmit=(event)=>
  { event.preventDefault();
    getapi((current)=>
      ([...current,tname])
    );
    setname({uname:'',email:'',password:''})
    

  }

  const inputevent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setname(values => ({...values, [name]: value}))
  }
    return(
        <>
         <form>
          
           {data.map((fields)=>
           {
           return(
          <>
          <label>{fields.name}</label>
          <input type={fields.type} onChange={(e)=>inputevent(e)} name={fields.name} value={tname[fields.name]} ></input>
          </>
          )
          })}
          <input type="button" value="ADD" onClick={onsubmit} />
          </form>

        </>
        )
}
export default Forminput;