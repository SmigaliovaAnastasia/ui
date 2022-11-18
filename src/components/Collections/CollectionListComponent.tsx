import { Link } from 'react-router-dom';
import { CollectionDto } from '../../common/Entities/CollectionDtos/CollectionDto';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './CollectionList.css'
import { CollectionService } from '../../services/CollectionService';
import { useContext } from 'react';
import { PagedRequestContext } from '../../common/Contexts/PagedRequestContext';

export function CollectionListComponent(props: {collection: CollectionDto}) {
  const collectionService = new CollectionService;
  const {state, dispatch} = useContext(PagedRequestContext);

  const handleClick = () => {
    collectionService.DeleteCollection(props.collection.id);
    dispatch({
      type: "forceUpdate"
    })
  } 

  return (
    <div>
    <div className="collection">
      <Link to={`/collectionGames/${props.collection.id}`} className="mask_collection"></Link>
      <Link to={`/updateCollection/${props.collection.id}`}><ModeEditOutlineOutlinedIcon className="collection_edit"/></Link>
      <div onClick={handleClick}><DeleteOutlineOutlinedIcon className="collection_delete"/></div>
      <div className="collection_image" style={{backgroundImage: `url(${props.collection.imageUrl})`}}></div>
      <p className="collection_name">{props.collection.name}</p>
      <div className="collection_details">
        <div>
          <p>Games: {props.collection.gamesNumber}</p>
          <p>Favourites: {props.collection.favouriteGamesNumber}</p>
        </div>
      </div>
    </div>
    </div>
  );
}