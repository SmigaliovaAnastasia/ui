import { GameListDto } from '../../common/Entities/GameDtos/GameListDto';
import { StarsBarComponent } from '../Ratings/StarsBarComponent';
import './GameListComponent.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../common/Contexts/UserContext';

export function GameListComponent(props: { game: GameListDto, onClick: (id: string) => void }) {
    const { user, setUser } = useContext(UserContext);
    const [add, setAdd] = useState<JSX.Element>();

    useEffect(() => {
        if (user) {
            setAdd(<p className="add" onClick={() => props.onClick(props.game.id)}>Add</p>)
        }
        else {
            setAdd(<></>);
        }
    }, [user]);

    return (
        <div className="found_game">
            <div className="mask"></div>
            <div className="picture" style={{ backgroundImage: `url(${props.game.imageUrl})` }} ></div>
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
                        <StarsBarComponent rating={props.game.rating} />
                        <p className="number" id="rating">{props.game.rating} / 5</p>
                        <p className="average">Average Rating</p>
                    </div>
                    {add}
                </div>
            </div>
        </div>
    );
}