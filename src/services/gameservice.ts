import { environment } from "../environment/environment";
import { Game } from "../components/Entity/Game";
import { GameDto } from "../components/Entity/GameDto";

export class GameService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  }; 

  public MockGame(game: GameDto) : Game {
    let mock : Game = {
      id : game.gameId,
      imageUrl : "url(/img/game4.jpg)",
      name : game.name,
      genre: "Action", 
      age: game.minPalyerAge, 
      complexity : "Easy", 
      minPlayers: game.minNumOfPlayers,
      maxPlayers: game.maxNumOfPlayers,
      description: game.description,
      rating: 4.81,
      copiesLeft: 10,
      playingTime: game.playingTime
    }
    return mock;
  };

  public async getGames() : Promise<Game[]> {
    const response = await fetch(`${this.apiUrl}/Game`);
    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      let games : Array<Game> = data.map((g: GameDto) => this.MockGame(g));
      return Promise.resolve(games);
    }
  }

  public async getGameById(id : number) : Promise<Game> {
    const response = await fetch(`${this.apiUrl}/Game/${id}`);
    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(this.MockGame(data));
    }
  }

  public async AddGame(game : GameDto) : Promise<Game> {
    const response = await fetch(`${this.apiUrl}/Game/`, {
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
      console.log(data);
      return Promise.resolve(this.MockGame(data));
    }
  }
}