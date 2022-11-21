import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../common/Contexts/UserContext";
import { GetUser } from "../../services/Utils/GetUser";
import { LogOut } from "../../services/Utils/Logout";

export function Logout() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect (() => {
    LogOut();
    setUser(GetUser());
  }, []);

  return (
    <div>
    </div>
  );
};