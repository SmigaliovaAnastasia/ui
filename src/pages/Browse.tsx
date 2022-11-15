import { GameListComponent } from "../components/Games/GameListComponent";
import { GameListDto } from "../common/Entities/GameDtos/GameListDto";
import { useState } from "react";
import { useEffect } from "react";
import { FilterBarComponent } from "../components/Filters/FilterBarComponent";
import { FilterContext } from "../common/Contexts/FilterContext";
import { GameService } from "../services/GameService";

export function Browse(){
  
  const gameservice = new GameService();

  const [games, setGames] = useState<JSX.Element[]>();
  const [searchName, setSearchName] = useState('');
  const [filters, setFilters] = useState<string[]>([]);
  
  useEffect(() => {
    let data = gameservice.getGames();
    let newGamesArray = data.then((games : Array<GameListDto>) => games.filter(g => g.name.toLowerCase().includes(searchName.toLowerCase())));
    newGamesArray.then((games : Array<GameListDto>) => setGames(games.map((g) => {return <GameListComponent key={g.id} game = {g}/>})));
  }, [searchName]);
  

  useEffect(()=>{console.log(filters)}, [filters]);

  return (
    <FilterContext.Provider value={{filters, setFilters}}>
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
            </div>
            {games}
          </div>
          <FilterBarComponent></FilterBarComponent>
        </div>
    </FilterContext.Provider>
  );
};
