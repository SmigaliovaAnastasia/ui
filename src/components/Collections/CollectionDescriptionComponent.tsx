import { useParams } from "react-router-dom";
import './CollectionDescription.css'
import { isPropertySignature } from "typescript";
import { CollectionDto } from "../../common/Entities/CollectionDtos/CollectionDto";

export function CollectionDescriptionComponent(props: { collection: CollectionDto }) {
  return (
    <div>
      <div className="collection_game_properties">
        <div className="collection_game_description_image" style={{ backgroundImage: `url(${props.collection.imageUrl})` }}></div>
        <div className="collection_game_description_block">
          <p className="header_collection">{props.collection.name}</p>
          <div className="collection_game_description">
            <p>Games: {props.collection.gamesNumber}</p>
            <p>Favourites: {props.collection.favouriteGamesNumber}</p>
            <p>Description: {props.collection.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
};