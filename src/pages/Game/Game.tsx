import { useState } from "react";
import { useEffect } from "react";
import { GameService } from "../../services/GameService";
import { useParams } from "react-router-dom";
import { GameComponent } from "../../components/Games/GameComponent";
import { GameForceUpdateContext } from "../../common/Contexts/GameForceUpdateContext";


export function Game() {

  const params = useParams();
  const gameservice = new GameService();
  const [game, setGame] = useState<JSX.Element>();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    let data = gameservice.getGameById(String(params.id));
    data.then((game) => setGame(<GameComponent key={game.id} game={game} />));
  }, [update]);

  return (
    <GameForceUpdateContext.Provider value={{update, setUpdate}}>
      {game}
    </GameForceUpdateContext.Provider>
  );
};
