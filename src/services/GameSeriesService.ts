import { environment } from "../config/environment/environment";
import { GenreDto } from "../common/Entities/GameDtos/GenreDto";
import { GameSeriesDto } from "../common/Entities/GameDtos/GameSeriesDto";

export class GameSeriesService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  };


  public async getGameSeriesById(id: string): Promise<GameSeriesDto> {
    const response = await fetch(`${this.apiUrl}/GameSeries/${id}`);
    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data);
    }
  }


  public async getGameSeries(): Promise<GameSeriesDto[]> {
    const response = await fetch(`${this.apiUrl}/GameSeries/`);
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