import React, { useContext } from "react";
import './Container.css';
import { Navigate, Route, Routes } from "react-router-dom";
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
import { UpdateGame } from "../../pages/Game/UpdateGame";
import { Register } from "../../pages/Login/Register";
import { UserContext } from "../../common/Contexts/UserContext";
import { Roles } from "../../common/Constants/Roles";

export function Container() {
  const {user, setUser} = useContext(UserContext);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/browse/:id" element={<Game />}></Route>
        <Route path="/login" element={user? <Navigate to='/'/> : <Login />}></Route>
        <Route path="/register" element={user ? <Navigate to='/'/> : <Register />}></Route>
        <Route path="/logout" element={user ? <Logout /> : <Navigate to='/'/>}></Route>
        <Route path="/collections" element={user ? <Collections /> : <Navigate to='/login'/>}></Route>
        <Route path="/createCollection" element={user ? <CreateCollection /> : <Navigate to='/login'/>}></Route>
        <Route path="/updateCollection/:id" element={user ? <UpdateCollection /> : <Navigate to='/login'/>}></Route>
        <Route path="/collectionGames/:id" element={user ? <CollectionsGames /> : <Navigate to='/login'/>}></Route>
        <Route path="/createGame" element={user && user.userRole === Roles.Admin ? <CreateGame /> : <Navigate to='/'/>}></Route>
        <Route path="/updateGame/:id" element={user && user.userRole === Roles.Admin ? <UpdateGame /> : <Navigate to='/'/>}></Route>
      </Routes>
      <DialogDefault text={""} proceed={() => { }}></DialogDefault>
    </div>
  );
};
