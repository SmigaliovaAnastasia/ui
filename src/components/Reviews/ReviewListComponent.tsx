import { GameListDto } from '../../common/Entities/GameDtos/GameListDto';
import { StarsBarComponent } from '../Ratings/StarsBarComponent';
import '../Games/GameListComponent.css';
import './Reviews.css'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../common/Contexts/UserContext';
import { ReviewDto } from '../../common/Entities/ReviewDtos/ReviewDto';

export function ReviewListComponent(props: { review: ReviewDto }) {
    return (
        <div className="found_game">
            <div className="mask"></div>
            <div className="picture" style={{ backgroundImage: `url(${props.review.userImageUrl})` }} ></div>
            <div className="details">
                <div className="description_reviews">
                    <div>
                        <p className="name">{props.review.userName}</p>
                    </div>
                    <div>
                        <div className="string_reviews"><p>Commentary: {props.review.commentary}</p></div>
                    </div>
                </div>
                <div className="ratings">
                    <div className="rating">
                        <StarsBarComponent rating={props.review.rating} />
                        <p className="number" id="rating">{props.review.rating} / 5</p>
                        <p className="average">Average Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
}