import React from "react";
import { User } from "../Entities/UserDtos/User";


export type UserContent = {
  user: User;
  setUser : (u: User) => void;
}

export const UserContext = React.createContext<UserContent>({ user: null, setUser : () => {} });