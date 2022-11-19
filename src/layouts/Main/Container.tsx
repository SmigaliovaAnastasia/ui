import React, { useContext } from "react";
import './Container.css';
import { Route, Routes } from "react-router-dom";
import { Browse } from "../../pages/Browse/Browse";
import { Game } from "../../pages/Game/Game";
import { CreateGame } from "../../pages/Game/CreateGame";
import { Home } from "../../pages/Home/Home"
import DialogDefault from "../../components/DialogWindows/DialogDefault";
import { Login } from "../../pages/Login/Login";
import { Collections } from "../../pages/Collections/Collections";
import { CreateCollection } from "../../pages/Collections/CreateCollection";
import { UpdateCollection } from "../../pages/Collections/UpdateCollection";
import { CollectionsGames } from "../../pages/CollectionsGames/CollectionsGames";
import { Logout } from "../../pages/Login/Logout";

export function Container() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/browse/:id" element={<Game />}></Route>
        <Route path="/createGame" element={<CreateGame />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/collections" element={<Collections />}></Route>
        <Route path="/createCollection" element={<CreateCollection />}></Route>
        <Route path="/updateCollection/:id" element={<UpdateCollection />}></Route>
        <Route path="/collectionGames/:id" element={<CollectionsGames />}></Route>
      </Routes>
      <DialogDefault text={""} proceed={() => { }}></DialogDefault>
    </div>
  );
};
