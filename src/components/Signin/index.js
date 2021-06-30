import React from 'react';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';


const Signin = () => {
    const [username,setusername]= useState("")
    const [password,setpassword]= useState("")
    const [signinsuccess,setsignin]= useState(false)

    const user="admin"
    const pass="12345"

    const handlesubmit = (e)=>{
        e.preventDefault();

        if(user==username && pass==password){
            console.info("Sign In successful");
            setsignin(true);
        }
        else{
            alert("Wrong username or password!!! Please try again")
            console.warn("Wrong username or password!!! Please try again");
        }

    }


    return ( 
        
        <div className="m-4">
            {signinsuccess && <Redirect to="/" />}
        <form onSubmit= {handlesubmit}>
            <div className="mb-3">
                <label className="form-label">User Name</label>
                <input onChange={(e)=>{setusername(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">Please provide a valid username</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input onChange={(e)=>{setpassword(e.target.value)}}type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
 
export default Signin;