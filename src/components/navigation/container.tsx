import React, { useContext } from "react";
import './container.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Browse } from "../pages/browse";
import { SingleGame } from "../pages/singlegame";
import { Home } from "../pages/home";
import { AddGame } from "../pages/addgame";

export function Container(){
  
  return (
    
      <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/browse" element = {<Browse/>}></Route>
          <Route path="/browse/:id" element = {<SingleGame/>}></Route>
          <Route path="/add" element = {<AddGame/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
};
