import React from "react"
import { GameDto } from "../Entity/GameDto"
import { StarsBar } from "../Ratings/StarsBar"
import './GameStandalone.css'
import { Link } from "react-router-dom"

export function GameStandalone(props: {game: GameDto}) {

return (
  <div>
        <Link className="description_back_link" to="/browse">
            <img className="description_filtericon" src="../img/left_arrow.svg"/>
            <p className="description_link">Back to previous page</p>
        </Link>
        <p className="header">{props.game.name}</p>
        <div className="game_container">
            <div className="game_picture" style = {{ backgroundImage: `url(${props.game.imageUrl})`}}></div>
            <div className="game_details">
                <div className="game_description">

                    <div className="description_line">
                        <p className="description_name">Type: </p>
                        <p className="description_text">Game </p>
                    </div>
                    <div className="description_line">
                        <p className="description_name">Genre: </p>
                        <p className="description_text">{props.game.genreDtos.map((g) => g.name + ', ')}</p>
                    </div>

                    <div className="description_line vertical_block">
                        <div className="vertical_line"></div>
                        <div className="column">
                            <p className="large">{props.game.complexityLevelDto.name}</p>
                            <p className="small">Complexity</p>
                        </div>
                        <div className="vertical_line"></div>
                        <div className="column">
                            <p className="large">{props.game.minPalyerAge}</p>
                            <p className="small">Age</p>
                        </div>
                        <div className="vertical_line"></div>
                        <div className="column">
                            <p className="large">{props.game.minNumOfPlayers}-{props.game.maxNumOfPlayers}</p>
                            <p className="small">Players</p>
                        </div>
                        <div className="vertical_line"></div>
                        <div className="column">
                            <p className="large">{props.game.minPlayingTimeMinutes} - {props.game.maxPlayingTimeMinutes} min.</p>
                            <p className="small">Playing time</p>
                        </div>
                        <div className="vertical_line"></div>
                    </div>

                    <div className="description_line">
                        <p className="description_name">Publisher: </p>
                        <p className="description_text">Wizards of the Coast </p>
                    </div>

                    <div className="description_line">
                        <p className="description_name">Edition: </p>
                        <p className="description_text">Castle Ravenloft Boardgame by Bill Slavicsek, Mike Mearls and Peter Lee</p>
                    </div>

                    <div className="description_line">
                        <p className="description_name">Website: </p>
                        <p className="description_text">www.dnd.castle.ravenflot.com </p>
                    </div>

                    <div className="description_line">
                        <p className="description_name">Game Series: </p>
                        <p className="description_text">{props.game.gameSeriesDto.name} </p>
                    </div>

                    <p className="description_name last_name">Description: </p>
                    <p className="description_text last_text">{props.game.description}</p>

                </div>
                <div className="right_column">
                    <div className="description_rating">
                        <StarsBar rating={4.35}></StarsBar>
                        <p className="description_number" id="rating">{4.35} / 5</p>
                        <p className="description_average">Average Rating</p>
                    </div>
                    <div className="description_add">
                        <p className="button_text">Add</p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
)};