import { Link } from 'react-router-dom';
import { CollectionDto } from '../../common/Entities/CollectionDtos/CollectionDto';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './CollectionGame.css'
import { CollectionService } from '../../services/CollectionService';
import { useContext } from 'react';
import { PagedRequestContext } from '../../common/Contexts/PagedRequestContext';
import { CollectionGameDto } from '../../common/Entities/CollectionGameDtos/CollectionGameDto';

export function CollectionGameComponent(props: {collectionGame: CollectionGameDto}) {
  const collectionService = new CollectionService;
  const {state, dispatch} = useContext(PagedRequestContext);

  const handleClick = () => {
    collectionService.DeleteCollection(props.collectionGame.id);
    dispatch({
      type: "forceUpdate"
    })
  } 

  return (
    <div>
    <div className="collection_game">
      <Link to={`/browse/${props.collectionGame.gameId}`} className="mask_collection_game"></Link>
      <Link to={`/updateCollection/${props.collectionGame.id}`}><ModeEditOutlineOutlinedIcon className="collection_game_edit"/></Link>
      <div onClick={handleClick}><DeleteOutlineOutlinedIcon className="collection_game_delete"/></div>
      <div className="collection_game_image" style={{backgroundImage: `url(${props.collectionGame.gameImageUrl})`}}></div>
      <p className="collection_game_name">{props.collectionGame.gameName}</p>
    </div>
    </div>
  );
}