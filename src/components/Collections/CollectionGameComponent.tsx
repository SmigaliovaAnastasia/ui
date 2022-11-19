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

export function CollectionGameComponent(props: { collectionGame: CollectionGameDto }) {
  const collectionService = new CollectionService;
  const { state, dispatch } = useContext(PagedRequestContext);

  const handleClick = () => {
    dispatch({
      type: "forceUpdate"
    })
  }

  return (
    <div>
      <div className="collection_game">
        <Link to={`/browse/${props.collectionGame.gameId}`} className="mask_collection_game"></Link>
        <div onClick={handleClick}><FavoriteBorderOutlinedIcon className="collection_game_edit" /></div>
        <div onClick={handleClick}><DeleteOutlineOutlinedIcon className="collection_game_delete" /></div>
        <div className="collection_game_image" style={{ backgroundImage: `url(${props.collectionGame.gameImageUrl})` }}></div>
        <p className="collection_game_name">{props.collectionGame.gameName}</p>
      </div>
    </div>
  );
}