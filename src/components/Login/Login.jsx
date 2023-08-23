
import { UserContext } from "../../App";
import { useContext } from "react";
import './login.css';
import React, { useState } from 'react';

import axios from 'axios';

const Login = () => {
   

    const [username, setUsername] = useState('');
    const [passwrod, setPassword] = useState('');
    const [poruka, setPoruka] = useState('');
    
    const handleChangeUsername = (event) => {
      setUsername(event.target.value);
    };
  
    const handleChangePassword = (event) => {
      setPassword(event.target.value);
    };


    return (
    

<div className="container">

    <div className="header"><h1>Login</h1></div>

<div className='login'>

        <form>
          <div className="form-outline mb-4">
            <input type="text" id="username" className="form-control" name='username' value={username} onChange={handleChangeUsername}/>
            <label className="form-label" for="form2Example1">Korisnicko ime</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="form2Example2" className="form-control" name='password' value={passwrod} onChange={handleChangePassword}/>
            <label className="form-label" for="form2Example2">Lozinka</label>
          </div>


          <button type="button" className="btn btn-outline-danger" onClick={() => {
            axios({
              method: 'post',
              url: '/api/v1/auth/authenticate',
              baseURL: 'http://localhost:8080',
              data: {
                username: username,
                password: passwrod
              }
            }).then((response) => {
              console.log(response);
              localStorage.setItem('token', response.data.token);
              localStorage.setItem('isAdmin', response.data.isAdmin);
              window.location.href = "/model";
            }, (error) => {
              console.log(error);
              setPoruka("Neispravno korisnicko ime ili sifra!");
            });
          }}>Prijavi se</button>

        </form>
        <br></br>
         <div className="poruka">
            <h4><b>{poruka}</b></h4>
          </div>








</div>
</div>
);
}

export default Login

