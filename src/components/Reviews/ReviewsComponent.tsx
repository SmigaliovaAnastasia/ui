import { useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import { FilterBarComponent } from "../../components/Filters/FilterBarComponent";
import { GameService } from "../../services/GameService";
import { SortingComponent } from "../../components/Sorting/SortingComponent";
import "../../pages/Browse/Browse.css";
import { defaultPagedRequest, defaultPagedRequestWithFilter } from "../../common/Constants/DefaultPagedRequest";
import { Pagination } from "@mui/material";
import { pagedRequestReducer } from "../../common/Reducers/PagedRequestReducer";
import { PagedRequestContext } from "../../common/Contexts/PagedRequestContext";
import { gameFilterBarModelWithGenresAndComplexityLevels } from "../../common/Constants/Filters/GameFilterBar";
import { GameListComponent } from "../../components/Games/GameListComponent";
import { PagedResult } from "../../common/Models/PagedRequest/PagedResult";
import { GameListDto } from "../../common/Entities/GameDtos/GameListDto";
import { gameSortingList } from "../../common/Constants/Sorting/GameSortingList";
import { DialogContext } from "../../common/Contexts/DialogContext";
import CollectionSelectDialog from "../../components/DialogWindows/CollectionSelectDialog";
import { SettingsSystemDaydreamOutlined } from "@mui/icons-material";
import { ReviewService } from "../../services/ReviewsService";
import { ReviewDto } from "../../common/Entities/ReviewDtos/ReviewDto";
import { reviewsSortingList } from "../../common/Constants/Sorting/ReviewsSortingList";
import { ReviewListComponent } from "./ReviewListComponent";
import { ReviewCreateUpdateComponent } from "./ReviewCreateUpdateComponent";
import { GetUser } from "../../services/Utils/GetUser";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ReviewUpdateDto } from "../../common/Entities/ReviewDtos/ReviewUpdateDto";
import { request } from "http";

export function ReviewsComponent(props: { gameId: string }) {

  const reviewsService = new ReviewService;

  const [reviews, setReviews] = useState<JSX.Element[]>();
  const [totalPages, setTotalPages] = useState(1);
  const [userCommentManager, setUserCommentManager] = useState<JSX.Element>();

  const { state, dispatch } = useContext(PagedRequestContext);

  const handleDelete = (reviewId: string) => {
    reviewsService.DeleteReview(reviewId).then(() => dispatch({ type: "forceUpdate" }));
  }

  const handleUpdate = (reviewUpdateDto: ReviewDto) => {
    setUserCommentManager(<ReviewCreateUpdateComponent
      gameId={props.gameId}
      review={{
        id: reviewUpdateDto.id,
        commentary: reviewUpdateDto.commentary,
        rating: reviewUpdateDto.rating
      }}
      type="update"
    />)
  }

  useEffect(() => {
    const user = GetUser()?.userId;
    let request = JSON.parse(JSON.stringify(state));
    if (user) {
      request.filters.push({
        filterProperty: "!application_user_id",
        filterOperator: '',
        value: String(user)
      })
    }
    let data = reviewsService.GetPagedReviews(request);
    data.then((pagedResult: PagedResult<ReviewDto>) => {
      setTotalPages(Math.ceil(pagedResult.total / pagedResult.pageSize));
      setReviews(pagedResult.items.map((g) => { return <ReviewListComponent key={g.id} review={g} buttons={[]} /> }));
    });
  }, [state]);

  useEffect(() => {
    const user = GetUser()?.userId;
    let request = JSON.parse(JSON.stringify(state));
    if (user) {
      request.filters.push({
        filterProperty: "application_user_id",
        filterOperator: '',
        value: String(user)
      })
      let data = reviewsService.GetPagedReviews(request);
      data.then((pagedResult: PagedResult<ReviewDto>) => {
        if (pagedResult.items && pagedResult.items[0]) {
          const item = pagedResult.items[0];
          const buttons =
            [
              <div key={"buttons"} className='admin_game_options'>
                <div key={"update"}><ModeEditOutlineOutlinedIcon onClick={() => handleUpdate(item)} className="game_edit" />
                </div>
                <div key={"delete"}><DeleteOutlineOutlinedIcon
                  onClick={() => handleDelete(item.id)}
                  className="game_delete" />
                </div>
              </div>
            ]
          setUserCommentManager(<ReviewListComponent key={item.id} review={item} buttons={buttons} />)
        }
        else {
          setUserCommentManager(<ReviewCreateUpdateComponent
            gameId={props.gameId}
            review={{ id: '', commentary: '', rating: 0 }}
            type="create"
          />)
        }
      });
    }
  }, [state]);




  const handleNameChange = (name: string) => {
    dispatch({
      type: "setFilter",
      payload: {
        filter: {
          filterProperty: "name",
          filterOperator: "",
          value: name
        },
        multipleChoice: false
      }
    });
  }

  return (
    <div className="browse">
      <div className="browse_container">
        <div className="search">
          <div className="properties">
            <div className="searchbar_container">
              <input className="searchbar" type="text" placeholder="Search" onChange={e => handleNameChange(e.target.value)} />
              <img alt="" className="magnifier" src="/img/Magnifier.svg" />
            </div>
          </div>
          <SortingComponent sortingList={reviewsSortingList}></SortingComponent>
        </div>
        {userCommentManager}
        {reviews}
        <div className="pagination">
          <Pagination count={totalPages} onChange={(e, value) => dispatch({ type: "setPage", payload: value })} />
        </div>
      </div>
    </div>
  );
};
