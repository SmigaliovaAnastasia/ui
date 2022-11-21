import { GameListDto } from '../../common/Entities/GameDtos/GameListDto';
import { StarsBarComponent } from '../Ratings/StarsBarComponent';
import '../Games/GameListComponent.css';
import './Reviews.css'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../common/Contexts/UserContext';
import { ReviewDto } from '../../common/Entities/ReviewDtos/ReviewDto';
import { Button, Grid, Rating, styled, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { User } from '../../common/Entities/UserDtos/User';
import { UserService } from '../../services/UserService';
import { ReviewService } from '../../services/ReviewsService';
import { GetUser } from '../../services/Utils/GetUser';
import { ReviewUpdateDto } from '../../common/Entities/ReviewDtos/ReviewUpdateDto';
import { idText } from 'typescript';

const StyledTextField = styled(TextField)({
  backgroundColor: "#262626",
  padding: 0.1,
  width: "100%",
  borderRadius: 10,
  '& p': {
    color: 'rgb(255, 108, 50)',
  },
  '& .MuiFormLabel-root': {
    color: '#BFBFBF',
  },
});

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#7135F2',
  },
  '& .MuiRating-iconHover': {
    color: '#7135F2',
  },
});

export function ReviewCreateUpdateComponent(props: { gameId: string, review: ReviewUpdateDto, type: "create" | "update" }) {
  const [value, setValue] = useState<number | null>(props.review.rating);
  const [comment, setComment] = useState(props.review.commentary);
  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userservice = new UserService;
    userservice.Get().then(u => {
      setImage(u.imageUrl);
      setUserName(u.userName);
    })
  }, [])

  const handleClick = () => {
    const reviewsService = new ReviewService;
    if (props.type = "update") {
      reviewsService.AddReview({
        commentary: comment,
        rating: value ? value : 0,
        applicationUserId: String(GetUser()?.userId),
        gameId: props.gameId,
      })
    }
    else if (props.type="update") {
      reviewsService.UpdateReview(props.review.id, {
        id: props.review.id,
        commentary: comment,
        rating: value ? value : 0
      })
    }
  }

  return (
    <div className="found_game">
      <div className="mask"></div>
      <div className="picture" style={{ backgroundImage: `url(${image})` }} ></div>
      <div className="details">
        <div className="description_reviews">
          <div>
            <p className="name">{userName}</p>
          </div>
          <Grid container>
            <Grid item xs={11}>
              <StyledTextField
                className='commentary'
                label="Commentary"
                placeholder="Commentary"
                variant="filled"
                multiline={true}
                rows={5}
                type="text"
                onChange={e => setComment(e.target.value)}
              />
            </Grid>
          </Grid>
        </div>
        <div className="ratings">
          <div className="rating">
            <StyledRating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <p className="number" id="rating">{value} / 5</p>
            <p className="average">Average Rating</p>
          </div>
          <Button onClick={handleClick} variant="contained">Submit</Button>
        </div>
      </div>
    </div>
  );
}