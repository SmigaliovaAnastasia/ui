import { useReducer, useState } from "react";
import { useEffect } from "react";
import { FilterBarComponent } from "../../components/Filters/FilterBarComponent";
import { GameService } from "../../services/GameService";
import { SortingComponent } from "../../components/Sorting/SortingComponent";
import "./Browse.css";
import { defaultPagedRequest } from "../../common/Constants/DefaultPagedRequest";
import { Pagination } from "@mui/material";
import { pagedRequestReducer } from "../../common/Reducers/PagedRequestReducer";
import { PagedRequestContext } from "../../common/Contexts/PagedRequestContext";
import { gameFilterBarModel } from "../../common/Constants/GameFilters/GameFilterBar";
import { GameListComponent } from "../../components/Games/GameListComponent";
import { PagedResult } from "../../common/Models/PagedRequest/PagedResult";
import { GameListDto } from "../../common/Entities/GameDtos/GameListDto";
import { gameSortingList } from "../../common/Constants/GameSorting/GameSortingList";

export function Browse(){
  
  const gameservice = new GameService;

  const [games, setGames] = useState<JSX.Element[]>();
  const [totalPages, setTotalPages] = useState(1);

  const [state, dispatch] = useReducer(pagedRequestReducer, defaultPagedRequest);
  
  useEffect(() => {console.log(state)}, [state]);
  useEffect(() => {
    let data = gameservice.GetPagedGames(state);
    data.then((pagedResult : PagedResult<GameListDto>) =>  
    {
      setTotalPages(Math.ceil(pagedResult.total/pagedResult.pageSize));
      setGames(pagedResult.items.map((g) => {return <GameListComponent key={g.id} game = {g}/>}));
    });
  }, [state]);
  
  function handleNameChange(name: string) {
    dispatch({ 
      type: "setFilter", 
      payload: { 
        filter: {
          filterProperty: "name", 
          filterOperator: "", 
          value: name
        },
        multipleChoice: false
      }
    });
  }

  return (
    <PagedRequestContext.Provider value={{state, dispatch}}>
        <p className="header">Browse games</p>
        <div className="browse">
          <div className="browse_container">   
            <div className="search">
              <div className="properties">
                <div className="searchbar_container">
                  <input className="searchbar" type="text" placeholder="Search" onChange={e => handleNameChange(e.target.value)}/>
                  <img alt="" className="magnifier" src="./img/Magnifier.svg"/>
                </div>
              </div>
                <SortingComponent sortingList={gameSortingList}></SortingComponent>
            </div>
            {games}
            <div className="pagination">
              <Pagination count={totalPages} onChange={(e, value) => dispatch({type: "setPage", payload: value})}/>
            </div>
          </div>
          <FilterBarComponent filterBarModel={gameFilterBarModel}></FilterBarComponent>
        </div>
    </PagedRequestContext.Provider>
  );
};
