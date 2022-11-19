import { useState } from "react";
import { useEffect } from "react";
import { GameService } from "../../services/GameService";
import { useParams } from "react-router-dom";
import { GameComponent } from "../../components/Games/GameComponent";


export function Game() {

  const params = useParams();
  const gameservice = new GameService();
  const [game, setGame] = useState<JSX.Element>();

  useEffect(() => {
    let data = gameservice.getGameById(String(params.id));
    data.then((game) => setGame(<GameComponent key={game.id} game={game} />));
  }, []);

  return (
    <div>
      {game}
    </div>
  );
};
