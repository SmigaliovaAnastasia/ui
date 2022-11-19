import React from "react";
import { GetUser } from "../../services/Utils/GetUser";
import { User } from "../Entities/UserDtos/User";
import { UserDto } from "../Entities/UserDtos/UserDto";


export type UserContent = {
  user: User;
  setUser: (u: User) => void;
}

export const UserContext = React.createContext<UserContent>({ user: GetUser(), setUser: () => { } });