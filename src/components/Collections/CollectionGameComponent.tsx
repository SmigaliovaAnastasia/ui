import { Link } from 'react-router-dom';
import { CollectionDto } from '../../common/Entities/CollectionDtos/CollectionDto';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './CollectionGame.css'
import { CollectionService } from '../../services/CollectionService';
import { useContext } from 'react';
import { PagedRequestContext } from '../../common/Contexts/PagedRequestContext';
import { CollectionGameDto } from '../../common/Entities/CollectionGameDtos/CollectionGameDto';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { CollectionsGamesService } from '../../services/CollectionsGamesService';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export function CollectionGameComponent(props: { collectionGame: CollectionGameDto }) {
  const collectionsGameService = new CollectionsGamesService;
  const { state, dispatch } = useContext(PagedRequestContext);

  const favourite: JSX.Element = props.collectionGame.isFavourite ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />

  const handleUpdate = () => {
    collectionsGameService.UpdateCollectionGame(
      props.collectionGame.id,
      {
        isFavourite: !(props.collectionGame.isFavourite)
      }
    ).then(() =>
      dispatch({
        type: "forceUpdate"
      }));
  }

  const handleDelete = () => {
    collectionsGameService.DeleteCollectionGame(props.collectionGame.id)
      .then(() => dispatch({
        type: "forceUpdate"
      }));
  }

  return (
    <div>
      <div className="collection_game">
        <Link to={`/browse/${props.collectionGame.gameId}`} className="mask_collection_game"></Link>
        <div onClick={handleUpdate} className="collection_game_edit">{favourite}</div>
        <div onClick={handleDelete} className="collection_game_delete"><DeleteOutlineOutlinedIcon /></div>
        <div className="collection_game_image" style={{ backgroundImage: `url(${props.collectionGame.gameImageUrl})` }}></div>
        <p className="collection_game_name">{props.collectionGame.gameName}</p>
      </div>
    </div>
  );
}