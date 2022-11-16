import { GameListComponent } from "../../components/Games/GameListComponent";
import { GameListDto } from "../../common/Entities/GameDtos/GameListDto";
import { useReducer, useState } from "react";
import { useEffect } from "react";
import { Filter } from "../../common/Models/Filter";
import { FilterBarComponent } from "../../components/Filters/FilterBarComponent";
import { FilterContext } from "../../common/Contexts/FilterContext";
import { GameService } from "../../services/GameService";
import { SortingComponent } from "../../components/Sorting/SortingComponent";
import "./Browse.css";
import { PagedRequest } from "../../common/Models/PagedRequest";
import { defaultPagedRequest } from "../../common/Models/DefaultPagedRequest";
import { PagedResult } from "../../common/Models/PagedResult";
import { Pagination } from "@mui/material";
import { Action } from "@remix-run/router";

export function Browse(){
  
  const gameservice = new GameService;

  const [games, setGames] = useState<JSX.Element[]>();
  const [searchName, setSearchName] = useState('');
  const [filterss, setFilters] = useState<Array<string>>([]);

  type Action = 
  | { type: 'setPage'; payload: number }
  | { type: 'setPageSize'; payload: number }
  | { type: 'setSorting'; payload: string }
  | { type: 'addFilter'; payload: Filter }
  | { type: 'removeFilter'; payload: Filter }
  | { type: 'reset' };

  const reducer = (state : PagedRequest, action : Action): PagedRequest => {
    switch (action.type) {
      case 'setPage':
        return { ...state,  pageIndex : action.payload };
      case 'setPageSize':
        return { ...state, pageSize : action.payload };
      case 'setSorting':
        return { ...state, sortingMethod: { value : action.payload }};
      case 'addFilter':
        return { ...state, filters: [...state.filters, action.payload ] };
        case 'removeFilter':
        return { ...state, filters: [...state.filters.splice([...state.filters].indexOf(action.payload), 1)] };
      case 'reset':
        return defaultPagedRequest;
      default:
        return state;
    }
  }

  const [request, dispatch] = useReducer(reducer, defaultPagedRequest);
  
  useEffect(() => {
    let data = gameservice.GetPagedGames(request);
    data.then((pagedResult : PagedResult<GameListDto>) =>  
    setGames(pagedResult.items.map((g) => 
    {return <GameListComponent key={g.id} game = {g}/>})));
  }, [request]);
  
  useEffect(()=>{ console.log(filterss); dispatch({type: "addFilter", payload: {filterProperty: filterss[0], filterOperator: "", value: ""}})}, [filterss]);

  return (
    <FilterContext.Provider value={{filterss, setFilters}}>
        <p className="header">Browse games</p>
        <div className="browse">
          <div className="browse_container">   
            <div className="search">
              <div className="properties">
                <div className="searchbar_container">
                  <input className="searchbar" type="text" placeholder="Search" onChange={e => setSearchName(e.target.value)}/>
                  <img alt="" className="magnifier" src="./img/Magnifier.svg"/>
                </div>
              </div>
                <p>Sort by: </p>
                <SortingComponent></SortingComponent>
            </div>
            {games}
            <div className="pagination">
              <Pagination count={10} onChange={(e, value) => dispatch({type: "setPage", payload: value})}/>
            </div>
          </div>
          <FilterBarComponent></FilterBarComponent>
        </div>
    </FilterContext.Provider>
  );
};
