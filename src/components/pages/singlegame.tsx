import React, { useContext } from "react";
import '../navigation/container.css'
import { Game } from "../Entity/Game";
import { FoundGame } from "../Game/GameBrowse";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { FilterBar } from "../Filters/FilterBar";
import { FilterContext } from "../Context/FilterContext";
import { GameService } from "../../services/gameservice";
import { useParams } from "react-router-dom";
import { GameStandalone } from "../Game/GameStandalone";


export function SingleGame(){
  
  const params = useParams();
  const gameservice = new GameService();
  const [game, setGame] = useState<JSX.Element>();
  
  useEffect(() => {
    let data = gameservice.getGameById(Number(params.id));
    data.then((game) => setGame(<GameStandalone key={game.id} game = {game}/>));
  });

  return (
    <div>
      {game}
    </div>
  );
};
