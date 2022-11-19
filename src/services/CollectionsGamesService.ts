import { CollectionGameDto } from "../common/Entities/CollectionGameDtos/CollectionGameDto";
import { environment } from "../config/environment/environment";
import { PagedRequest } from "../common/Models/PagedRequest/PagedRequest";
import { PagedResult } from "../common/Models/PagedRequest/PagedResult";
import { FilterSharp } from "@mui/icons-material";
import { CollectionGameCreateDto } from "../common/Entities/CollectionGameDtos/CollectionGameCreateDto";
import { GetJwt } from "./Utils/GetJwt";
import { CollectionGameUpdateDto } from "../common/Entities/CollectionGameDtos/CollectionGameUpdateDto";

export class CollectionsGamesService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  };


  public async getCollectionGameById(id: string): Promise<CollectionGameDto> {
    let jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/CollectionsGames/${id}`, {
      method: 'GET',
      headers: jwt,
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


  public async GetPagedCollectionsGames(pagedRequest: PagedRequest): Promise<PagedResult<CollectionGameDto>> {
    let jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/CollectionsGames/paginated`, {
      method: 'POST',
      headers: jwt,
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


  public async AddCollectionGame(game: CollectionGameCreateDto) {
    let jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/CollectionsGames/`, {
      method: 'POST',
      headers: jwt,
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

  public async UpdateCollectionGame(id: string, game: CollectionGameUpdateDto) {
    let jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/CollectionsGames/${id}`, {
      method: 'PUT',
      headers: jwt,
      body: JSON.stringify(game) 
    });

    const data = await response;
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve();
    }
  }

  public async DeleteCollectionGame(id: string) {
    let jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/CollectionsGames/${id}`, {
      method: 'DELETE',
      headers: jwt,
    });

    const data = await response;
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve();
    }
  }
}