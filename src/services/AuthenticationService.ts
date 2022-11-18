import { environment } from "../config/environment/environment";

export class AuthenticationService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  }; 
  
  public async Login(user : object) {
    const response = await fetch(`${this.apiUrl}/Authentication/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user) 
    });

    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    
    localStorage.setItem('token', data['token']);
  }

  public async Register(user : object) {
    const response = await fetch(`${this.apiUrl}/Authentication/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user) 
    });

    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve();
    }
  }
}