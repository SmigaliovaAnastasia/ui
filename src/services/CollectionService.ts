import { CollectionDto } from "../common/Entities/CollectionDtos/CollectionDto";
import { environment } from "../config/environment/environment";
import { PagedRequest } from "../common/Models/PagedRequest/PagedRequest";
import { PagedResult } from "../common/Models/PagedRequest/PagedResult";
import { GetJwt } from "./Utils/GetJwt";
import { CollectionCreateDto } from "../common/Entities/CollectionDtos/CollectionCreateDto";

export class CollectionService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  }; 


  public async getCollectionById(id : string) : Promise<CollectionDto> {
    let jwt = GetJwt();

    const response = await fetch(`${this.apiUrl}/Collections/${id}`, {
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


  public async GetPagedCollections(pagedRequest : PagedRequest) : Promise<PagedResult<CollectionDto>> {
    let jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/Collections/paginated`, {
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

  
  public async AddCollection(collection : CollectionCreateDto) : Promise<CollectionDto> {
    let jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/Collections/`, {
      method: 'POST',
      headers: jwt,
      body: JSON.stringify(collection) 
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

  public async UpdateCollection(id: string, collection : CollectionCreateDto) {
    let jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/Collections/${id}`, {
      method: 'PUT',
      headers: jwt,
      body: JSON.stringify(collection) 
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

  public async DeleteCollection(id: string) {
    let jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/Collections/${id}`, {
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