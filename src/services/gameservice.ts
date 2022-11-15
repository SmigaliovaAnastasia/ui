import { environment } from "../config/environment/environment";
import { GameListDto } from "../common/Entities/GameDtos/GameListDto";
import { GameDto } from "../common/Entities/GameDtos/GameDto";

export class GameService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  }; 

  public async getGames() : Promise<GameListDto[]> {
    const response = await fetch(`${this.apiUrl}/Games`);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data);
    }
  }

  public async getGameById(id : string) : Promise<GameDto> {
    const response = await fetch(`${this.apiUrl}/Games/${id}`);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data);
    }
  }

  public async AddGame(game : GameListDto) : Promise<GameListDto> {
    const response = await fetch(`${this.apiUrl}/Games/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(game) 
    });

    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data);
    }
  }
}