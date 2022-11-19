import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../common/Contexts/UserContext";
import { LogOut } from "../../services/Utils/Logout";

export function Logout() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect (() => {
    LogOut();
    setUser(null);
    navigate('/');
  }, []);

  return (
    <div>
    </div>
  );
};