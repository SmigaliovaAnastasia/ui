import React, { useContext } from "react";
import './Container.css';
import { Route, Routes } from "react-router-dom";
import { Browse } from "../../pages/Browse";
import { Game } from "../../pages/Game";
import { CreateGame } from "../../pages/CreateGame";
import { Home } from "../../pages/Home"

export function Container(){
  
  return (
      <div className="container">
          <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path="/browse" element = {<Browse/>}></Route>
            <Route path="/browse/:id" element = {<Game/>}></Route>
            <Route path="/create" element = {<CreateGame/>}></Route>
          </Routes>
      </div>
  );
};
