import React, { useEffect } from 'react';
import { GameListDto } from '../Entity/GameListDto';
import { StarsBar } from '../Ratings/StarsBar';
import './GameBrowse.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export function FoundGame(props: {game: GameListDto}) {
    const image = useRef<HTMLDivElement>(null);

  return (
    <div className = "found_game">
        <div className="mask" ref={image}></div>
        <div className="picture" style={{ backgroundImage: `url(${props.game.imageUrl})`}} ></div>
        <div className="details">
            <div className="description">
                <div>
                    <Link to={`/browse/${props.game.id}`}><p className="name">{props.game.name}</p></Link>
                </div>
                <div>
                    <div className="string"><p>Genre:</p><p>{props.game.genres.join(', ')}</p></div>
                    <div className="string"><p>Age:</p><p>{props.game.minPalyerAge}+</p></div>
                    <div className="string"><p>Complexity:</p><p>{props.game.complexityLevelName}</p></div>
                    <div className="string"><p>Players:</p><p>{props.game.minNumOfPlayers} - {props.game.maxNumOfPlayers}</p></div>
                    <div className="string"><p>Description: {props.game.description}</p></div>
                </div>
            </div>
            <div className="ratings">
                <div className="rating">
                    <StarsBar rating={4.35}/>
                    <p className="number" id="rating">{4.35} / 5</p>
                    <p className="average">Average Rating</p>
                </div>
                <p className="add">Add</p>
            </div>
        </div>
    </div>
  );
}