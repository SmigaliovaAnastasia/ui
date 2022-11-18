import { Link } from 'react-router-dom';
import { CollectionDto } from '../../common/Entities/CollectionDtos/CollectionDto';

export function CollectionListComponent(props: {collection: CollectionDto}) {

  return (
    <Link to={'/'}>
    <div className="collection">
      <div className="mask_collection"></div>
      <div className="collection_image" style={{backgroundImage: `url(${props.collection.imageUrl})`}}></div>
      <p className="collection_name">{props.collection.name}</p>
      <div className="collection_details">
        <div>
          <p>Games: {props.collection.gamesNumber}</p>
          <p>Favourites: {props.collection.favouriteGamesNumber}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}