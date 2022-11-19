import { hasUncaughtExceptionCaptureCallback } from "process";
import { User } from "../../common/Entities/UserDtos/User";

export const GetUser = () : User => {
  let token = localStorage.getItem('token');
  if (token)
  {
    let data = JSON.parse(window.atob(token.split('.')[1]))
    let user : User = {
      userId : data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
      userRole : data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    }
    return user;
  }
  return null;
}