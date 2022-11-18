import { useParams } from "react-router-dom";
import './CollectionDescription.css'
import { isPropertySignature } from "typescript";
import { CollectionDto } from "../../common/Entities/CollectionDtos/CollectionDto";

export function CollectionDescriptionComponent(props: {collection: CollectionDto})
{
  return (
    <div>
        <p className="header_collection">{props.collection.name}</p>
        <div className="collection_game_properties">
            <div className="games_liked">
                <p>Games: {props.collection.gamesNumber}</p>
                <p>Favourites: {props.collection.favouriteGamesNumber}</p>
            </div>
            <div className="collection_game_description">
                <p>Description: </p>
                <p>{props.collection.description}</p>
            </div>
        </div>
      </div>
  )
};