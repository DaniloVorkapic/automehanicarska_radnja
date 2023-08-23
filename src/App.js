import React, { createContext } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import './app.css';
import Model from "./components/Model/Model";
import Brand from "./components/Brand/Brand";
import Customer from "./components/Customer/Customer";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";

const App = () => {
  const urlBase = "localhost:8080";

  return (
   
    <div className='Page'>
      
      <BrowserRouter className='App'>
      
       
            
            
          <Routes>
          <Route path='/' element={<Login/>} />
       </Routes>
       <div ><Navbar/></div>
        <div className='Main'>
          <div ><Sidebar/></div>
          <div className='CenterComponent'>
       <Routes>
       
       <Route exact path="/model" element={<Model></Model>}></Route>
       <Route exact path="/brand" element={<Brand></Brand>}></Route>
       <Route exact path="/customer" element={<Customer></Customer>}></Route>
      <Route exact path="/register" element={<Register></Register>}></Route>
      <Route exact path="/reservaton" element={<HomePage></HomePage>}></Route>
      </Routes>
          </div>
        </div>
        
      </BrowserRouter>
    </div>

  );
};


export default App;

