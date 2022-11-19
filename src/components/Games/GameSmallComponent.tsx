import { GameListDto } from '../../common/Entities/GameDtos/GameListDto';
import { CollectionsGamesService } from '../../services/CollectionsGamesService';

export function GameSmallComponent(props: { game: GameListDto, collectionId: string, onClick : () => void }) {
  const collectionsGamesService = new CollectionsGamesService;

  const handleClick = () => {
    collectionsGamesService.AddCollectionGame({
      gameId : props.game.id,
      collectionId: props.collectionId,
      isFavourite: false,
    }).then(() => props.onClick());
  };
  
  return (
    <div onClick={handleClick}>
      <div className="game_small">
        <div className="game_small_image" style={{ backgroundImage: `url(${props.game.imageUrl})` }}></div>
        <p className="game_small_name">{props.game.name}</p>
      </div>
    </div>
  )
};