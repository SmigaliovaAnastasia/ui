import { useReducer, useState } from "react";
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
import { ReviewCreateComponent } from "./ReviewCreateComponent";

export function ReviewsComponent(props: {gameId : string}) {

  const reviewsService = new ReviewService;

  const [reviews, setReviews] = useState<JSX.Element[]>();
  const [totalPages, setTotalPages] = useState(1);

  const [state, dispatch] = useReducer(pagedRequestReducer, defaultPagedRequestWithFilter([{
    filterProperty: "game_id",
    filterOperator: '',
    value: String(props.gameId)
  }]));

  useEffect(() => {
    console.log(state);
    let data = reviewsService.GetPagedReviews(state);
    data.then((pagedResult: PagedResult<ReviewDto>) => {
      setTotalPages(Math.ceil(pagedResult.total / pagedResult.pageSize));
      setReviews(pagedResult.items.map((g) => { return <ReviewListComponent key={g.id} review={g} /> }));
    });
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
    <div>
      <PagedRequestContext.Provider value={{ state, dispatch }}>
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
            <ReviewCreateComponent gameId={props.gameId}></ReviewCreateComponent>
            {reviews}
            <div className="pagination">
              <Pagination count={totalPages} onChange={(e, value) => dispatch({ type: "setPage", payload: value })} />
            </div>
          </div>
        </div>
      </PagedRequestContext.Provider>
    </div>
  );
};
