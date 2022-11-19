import { CollectionDto } from '../../common/Entities/CollectionDtos/CollectionDto';
import { GameListDto } from '../../common/Entities/GameDtos/GameListDto';
import { CollectionsGamesService } from '../../services/CollectionsGamesService';

export function CollectionSmallComponent(props: { collection: CollectionDto, gameId: string, onClick : () => void }) {
  const collectionsGamesService = new CollectionsGamesService;

  const handleClick = () => {
    collectionsGamesService.AddCollectionGame({
      gameId : props.gameId,
      collectionId: props.collection.id,
      isFavourite: false,
    }).then(() => props.onClick());
  };
  
  return (
    <div onClick={handleClick}>
      <div className="game_small">
        <div className="game_small_image" style={{ backgroundImage: `url(${props.collection.imageUrl})` }}></div>
        <p className="game_small_name">{props.collection.name.slice(0,20)}</p>
      </div>
    </div>
  )
};