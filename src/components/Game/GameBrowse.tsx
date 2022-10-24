import React, { useEffect } from 'react';
import { Game } from '../Entity/Game';
import { StarsBar } from '../Ratings/StarsBar';
import './GameBrowse.css';
import { useGameAvailabilityStatus } from '../CustomHook';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export function FoundGame(props: {game: Game}) {
    const [isAvailable, substractCopy] = useGameAvailabilityStatus(props.game.copiesLeft);
    const image = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(!isAvailable && image.current != null)
        {
            image.current.style.backgroundImage = "url(/img/soldout.png)";
            image.current.style.opacity = "0.15";
        }
    }, [isAvailable]);

  return (
    <div className = "found_game">
        <div className="mask" ref={image}></div>
        <div className="picture" style={{ backgroundImage: props.game.imageUrl}} ></div>
        <div className="details">
            <div className="description">
                <div>
                    <Link to={`/browse/${props.game.id}`}><p className="name">{props.game.name}</p></Link>
                </div>
                <div>
                    <div className="string"><p>Genre:</p><p>{props.game.genre}</p></div>
                    <div className="string"><p>Age:</p><p>{props.game.age}+</p></div>
                    <div className="string"><p>Complexity:</p><p>{props.game.complexity}</p></div>
                    <div className="string"><p>Players:</p><p>{props.game.minPlayers} - {props.game.maxPlayers}</p></div>
                    <div className="string"><p>Description: {props.game.description}</p></div>
                </div>
            </div>
            <div className="ratings">
                <div className="rating">
                    <StarsBar rating={props.game.rating}/>
                    <p className="number" id="rating">{props.game.rating} / 5</p>
                    <p className="average">Average Rating</p>
                </div>
                <p className="add" onClick={substractCopy}>Add</p>
            </div>
        </div>
    </div>
  );
}