import { GameDto } from "../../common/Entities/GameDtos/GameDto"
import { GenreDto } from "../../common/Entities/GameDtos/GenreDto"
import { StarsBarComponent } from "../Ratings/StarsBarComponent"
import './GameComponent.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../common/Contexts/UserContext"
import { Roles } from "../../common/Constants/Roles"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export function GameComponent(props: { game: GameDto }) {

    const { user, setUser } = useContext(UserContext);
    const adminMode = user?.userRole === Roles.Admin ?
        [
            <div key={"adminButtons"} className='admin_game_options'>
                <Link to={`/`}><ModeEditOutlineOutlinedIcon key={"edit"} className="game_edit" /></Link>
                <div key={"delete"}><DeleteOutlineOutlinedIcon className="game_delete" /></div>
            </div>
        ] : [];

    return (
        <div>
            <div className="game_container">
                <div className="game_picture" style={{ backgroundImage: `url(${props.game.imageUrl})` }}></div>
                <div className="game_details">
                    <div className="game_description">

                        <div>
                            <p className="game_header">{props.game.name}</p>
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
                        </div>
                        <div>
                            <div className="description_line">
                                <p className="description_name">Genres: </p>
                                <p className="description_text">{props.game.genreDtos.map((g: GenreDto) => g.name + ', ')}</p>
                            </div>

                            <div className="description_line">
                                <p className="description_name">Game Series: </p>
                                <p className="description_text">{props.game.gameSeriesDto.name} </p>
                            </div>

                            <div className="description_line">
                                <p className="description_name" style={{ color: '#BFBFBF' }}>Description: {props.game.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="right_column">
                        <div className="description_game_rating">
                            <StarsBarComponent rating={props.game.rating}></StarsBarComponent>
                            <p className="description_number" id="rating">{props.game.rating} / 5</p>
                            <p className="description_average">Average Rating</p>
                        </div>
                        {adminMode}
                    </div>
                </div>
            </div>

            <div className="main_container">
                <div className="tabs">
                    <div className="tab active">Reviews</div>
                    <div className="tab">Rules</div>
                </div>

                <div className="tab_content">
                    <p></p>
                </div>
            </div>
        </div>
    )
};