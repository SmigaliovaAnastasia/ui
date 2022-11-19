import { CollectionGameDto } from "../common/Entities/CollectionGameDtos/CollectionGameDto";
import { environment } from "../config/environment/environment";
import { PagedRequest } from "../common/Models/PagedRequest/PagedRequest";
import { PagedResult } from "../common/Models/PagedRequest/PagedResult";
import { FilterSharp } from "@mui/icons-material";

export class CollectionsGamesService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  };


  public async getCollectionGameById(id: string): Promise<CollectionGameDto> {
    const response = await fetch(`${this.apiUrl}/CollectionsGames/${id}`);
    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data);
    }
  }


  public async GetPagedCollectionsGames(pagedRequest: PagedRequest): Promise<PagedResult<CollectionGameDto>> {
    const response = await fetch(`${this.apiUrl}/CollectionsGames/paginated`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pagedRequest)
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


  public async AddCollectionGame(game: CollectionGameDto) {
    /*const response = await fetch(`${this.apiUrl}/Games/`, {
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
  */
  }
}