import React from "react"
import { Game } from "../Entity/Game"
import { StarsBar } from "../Ratings/StarsBar"
import './GameStandalone.css'
import { Link } from "react-router-dom"

export function GameStandalone(props: {game: Game}) {

return (
  <div>
        <Link className="description_back_link" to="/browse">
            <img className="description_filtericon" src="../img/left_arrow.svg"/>
            <p className="description_link">Back to previous page</p>
        </Link>
        <p className="header">{props.game.name}</p>
        <div className="game_container">
            <div className="game_picture" style = {{ backgroundImage: props.game.imageUrl}}></div>
            <div className="game_details">
                <div className="game_description">

                    <div className="description_line">
                        <p className="description_name">Type: </p>
                        <p className="description_text">Game </p>
                    </div>
                    <div className="description_line">
                        <p className="description_name">Genre: </p>
                        <p className="description_text">{props.game.genre}</p>
                    </div>

                    <div className="description_line vertical_block">
                        <div className="vertical_line"></div>
                        <div className="column">
                            <p className="large">{props.game.complexity}</p>
                            <p className="small">Complexity</p>
                        </div>
                        <div className="vertical_line"></div>
                        <div className="column">
                            <p className="large">{props.game.age}</p>
                            <p className="small">Age</p>
                        </div>
                        <div className="vertical_line"></div>
                        <div className="column">
                            <p className="large">{props.game.minPlayers}-{props.game.maxPlayers}</p>
                            <p className="small">Players</p>
                        </div>
                        <div className="vertical_line"></div>
                        <div className="column">
                            <p className="large">{props.game.playingTime}</p>
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
                        <p className="description_name">FAQs: </p>
                        <p className="description_text">www.publisher.com/faq </p>
                    </div>

                    <p className="description_name last_name">Description: </p>
                    <p className="description_text last_text">{props.game.description}</p>

                </div>
                <div className="right_column">
                    <div className="description_rating">
                        <StarsBar rating={props.game.rating}></StarsBar>
                        <p className="description_number" id="rating">{props.game.rating} / 5</p>
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