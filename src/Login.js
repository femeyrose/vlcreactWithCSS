import React, { useState,useEffect } from "react";
import "./Login.css";
import Home from "./Home"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
// Importing toastify module
import {toast} from 'react-toastify'; 
  
// Import toastify css file

toast.configure()

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const [token,setToken] =useState("");
      const history = useHistory();

    useEffect(() => {
    //     axios.get('http://165.22.218.254:4050/auth/login').then(rsp => {
    //         console.log(rsp);
    // })

    },[])

    const notify = ()=>{ 
  
        // Calling toast method by passing string
        toast('Hello Geeks') 
    }
    

    function handleSubmit(event) {
       
        event.preventDefault();
        console.log(email)
        console.log(password)

          axios({
            method: 'post',
            url: 'http://165.22.218.254:4050/auth/login',
            data: {
                "username": email,
                "password": password
            }
          }).then(rsp=>{
            console.log(rsp);
            if(rsp.data.auth==true){
                console.log(token)
                setToken(rsp.data.token)
                localStorage.setItem("token",token)
                history.push("/home");
               
              }

            else
            {
                
            }
           
          });


    }

    return (
        <div className="container">
            <div className="align">

                <form className="cen">
                    <h5 className="mb-3 mt-3">Login</h5>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
                            onChange={(e) => setEmail(e.target.value)} required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <button type="button" className="btn btn-primary mb-3 col" onClick={handleSubmit} >
                        <Link to="" className="dec">Login </Link></button>
                </form>
            </div>
        </div>

    );
}

export default Login;
