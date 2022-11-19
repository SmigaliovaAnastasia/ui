import { environment } from "../config/environment/environment";
import { GenreDto } from "../common/Entities/GameDtos/GenreDto";

export class GenreService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  };


  public async getGenreById(id: string): Promise<GenreDto> {
    const response = await fetch(`${this.apiUrl}/Genres/${id}`);
    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data);
    }
  }


  public async getGenres(): Promise<GenreDto[]> {
    const response = await fetch(`${this.apiUrl}/Genres/`);
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