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


  public async getCollectionGameById(id : string) : Promise<CollectionGameDto> {
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


  public async GetPagedCollectionsGames(id : string, pagedRequest : PagedRequest) : Promise<PagedResult<CollectionGameDto>> {
    
    let filter = {
      filterProperty: "collection_id", 
      filterOperator: '', 
      value: String(id) 
    };

    let previous = pagedRequest.filters.filter(f => f.filterProperty === filter.filterProperty);
    if( previous )
    {
      previous.map(x => pagedRequest.filters.splice(pagedRequest.filters.indexOf(x), 1));
    }

    if(!pagedRequest.filters.includes(filter))
    {
      pagedRequest.filters.push(filter);
    }
    
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

  
  public async AddCollectionGame(game : CollectionGameDto) {
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