
import './register.css'; // Import your CSS or SCSS file
import axios from 'axios';
import React, { useState } from 'react';


const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
      };
    
      const handleChangeSurname = (event) => {
        setSurname(event.target.value);
      };
    
      const handleChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
      };
    
      const handleChangeEmail = (event) => {
        setEmail(event.target.value);
      };
    
      const handleChangeUsername = (event) => {
        setUsername(event.target.value);
      };
    
      const handleChangePassword = (event) => {
        setPassword(event.target.value);
      };
    
     
      const handleRegister = () => {
        axios
          .post('/api/v1/auth/register', {
            name,
            surname,
            phoneNumber,
            email,
            username,
            password,
          })
          .then((response) => {
            console.log(response);
            setMessage('Registration successful!');
          })
          .catch((error) => {
            console.error(error);
            setMessage('Registration failed.');
          });
      };


  return (
    <div className="container">
    <div className="header">
      <h1>Register</h1>
    </div>
    <div className="register-form">
      <form>
        <div className="form-row">
          <div className="form-outline">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              name="name"
              value={name}
              onChange={handleChangeName}
            />
          </div>

          <div className="form-outline">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              className="form-control"
              name="surname"
              value={surname}
              onChange={handleChangeSurname}
            />
          </div>

          <div className="form-outline">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              className="form-control"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-outline">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>

          <div className="form-outline">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              name="username"
              value={username}
              onChange={handleChangeUsername}
            />
          </div>

          <div className="form-outline">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
        </div>

        <button
          type="button"
          className="btn btn-outline-primary btn-register"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
      <div className="message">
        <h4>{message}</h4>
      </div>
    </div>
  </div>
);
};

export default Register
