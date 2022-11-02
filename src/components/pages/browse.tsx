import React, { useContext } from "react";
import '../navigation/container.css'
import { FoundGame } from "../Game/GameBrowse";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { FilterBar } from "../Filters/FilterBar";
import { FilterContext } from "../Context/FilterContext";
import { GameService } from "../../services/gameservice";
import { Link } from "react-router-dom";

export function Browse(){
  
  const gameservice = new GameService();

  const [games, setGames] = useState<JSX.Element[]>();
  const [searchName, setSearchName] = useState('');
  const [filters, setFilters] = useState<string[]>([]);
  
  useEffect(() => {
    let data = gameservice.getGames();
    let newGamesArray = data.then((games) => games.filter(g => g.name.toLowerCase().includes(searchName.toLowerCase())));
    newGamesArray.then((games) => setGames(games.map((g) => {return <FoundGame key={g.id} game = {g}/>})));
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
                  <img className="magnifier" src="./img/Magnifier.svg"/>
                </div>
              </div>
            </div>
            {games}
          </div>
          <FilterBar></FilterBar>
        </div>
    </FilterContext.Provider>
  );
};
