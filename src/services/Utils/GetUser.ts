import { hasUncaughtExceptionCaptureCallback } from "process";
import { User } from "../../common/Entities/UserDtos/User";

export const GetUser = () : User => {
  let user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}