import { User } from "../common/Entities/UserDtos/User";
import { environment } from "../config/environment/environment";
import { GetJwt } from "./Utils/GetJwt";

export class UserService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  };

  public async Get(): Promise<User> {
    let jwt = GetJwt();

    const response = await fetch(`${this.apiUrl}/Users/`, {
      method: 'GET',
      headers: jwt,
    });

    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    localStorage.setItem('user', JSON.stringify(data));
    return (data);
  }

  public async Put(user: object) {
    let jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/Users/`, {
      method: 'PUT',
      headers: jwt,
      body: JSON.stringify(user)
    });

    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
  }
}