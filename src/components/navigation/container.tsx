import React, { useContext } from "react";
import './container.css';
import { Game } from "../Entity/Game";
import { FoundGame } from "../Game/GameBrowse";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { FilterBar } from "../Filters/FilterBar";
import { FilterContext } from "../Context/FilterContext";


export function Container(){
  const gamesInitial : Game[] = [ 
    {
      id : 1,
      imageUrl : "url(/img/game1.jpg)",
      name : "Dungeons & Dragons",
      genre: "Action, RPG", 
      age: 13, 
      complexity : "Medium", 
      minPlayers: 2,
      maxPlayers: 4,
      description: "This is a test description.",
      rating: 4.32,
      copiesLeft: 10
    },
    {
      id : 2,
      imageUrl : "url(/img/game2.jpg)",
      name : "Activity! ",
      genre: "Action", 
      age: 8, 
      complexity : "Easy", 
      minPlayers: 1,
      maxPlayers: 8,
      description: "This is a test description.",
      rating: 3.52,
      copiesLeft: 10
    },
    {
      id : 3,
      imageUrl : "url(/img/game3.jpg)",
      name : "Some game you'll love",
      genre: "Action", 
      age: 8, 
      complexity : "Easy", 
      minPlayers: 1,
      maxPlayers: 8,
      description: "This is a test description.",
      rating: 5.00,
      copiesLeft: 10
    },
    {
      id : 4,
      imageUrl : "url(/img/game4.jpg)",
      name : "Some other game! ",
      genre: "Action", 
      age: 8, 
      complexity : "Easy", 
      minPlayers: 1,
      maxPlayers: 8,
      description: "This is a test description.",
      rating: 2.81,
      copiesLeft: 10
    }

  ];

  const [games, setGames] = useState(gamesInitial.map ((g) => {return <FoundGame key={g.id} game = {g}/>}));
  const [searchName, setSearchName] = useState('');
  const [filters, setFilters] = useState<string[]>([]);
  
  useEffect(() => {
    let newGamesArray = gamesInitial.filter(g => g.name.toLowerCase().includes(searchName.toLowerCase()));
    setGames(newGamesArray.map ((g) => {return <FoundGame key={g.id} game = {g}/>}));
  }, [searchName]);
  

  useEffect(()=>{console.log(filters)}, [filters]);

  return (
    <FilterContext.Provider value={{filters, setFilters}}>
      <div className="container">
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
      </div>
    </FilterContext.Provider>
  );
};
