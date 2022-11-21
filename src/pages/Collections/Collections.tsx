import { SortingComponent } from "../../components/Sorting/SortingComponent"
import './Collections.css'
import { collectionSortingList } from "../../common/Constants/Sorting/CollectionSortingList";
import { Pagination } from "@mui/material";
import { CollectionListComponent } from "../../components/Collections/CollectionListComponent";
import { useEffect, useState, useReducer, useContext } from "react";
import { JsxElement } from "typescript";
import { pagedRequestReducer } from "../../common/Reducers/PagedRequestReducer";
import { defaultPagedRequest } from "../../common/Constants/DefaultPagedRequest";
import { CollectionService } from "../../services/CollectionService";
import { CollectionDto } from "../../common/Entities/CollectionDtos/CollectionDto";
import { PagedResult } from "../../common/Models/PagedRequest/PagedResult";
import { UserContext } from "../../common/Contexts/UserContext";
import { PagedRequestContext } from "../../common/Contexts/PagedRequestContext";
import { Link, useNavigate } from "react-router-dom";

export function Collections() {
  let collectionService = new CollectionService();

  const [collections, setCollections] = useState<Array<JSX.Element>>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [state, dispatch] = useReducer(pagedRequestReducer, defaultPagedRequest);
 

  useEffect(() => {
    let data = collectionService.GetPagedCollections(state);
    data.then((pagedResult: PagedResult<CollectionDto>) => {
      setTotalPages(Math.ceil(pagedResult.total / pagedResult.pageSize));
      setCollections(pagedResult.items.map((c) => {
        return <CollectionListComponent key={c.id} collection={c} />
      }));
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
    <PagedRequestContext.Provider value={{ state, dispatch }}>
      <p className="header">My Collections</p>
      <div className="collections_browse_container">
        <div className="collection_properties">
          <div className="searchbar_container">
            <input className="searchbar" type="text" placeholder="Search" onChange={e => handleNameChange(e.target.value)} />
            <img className="magnifier" src="/img/Magnifier.svg" />
          </div>
        </div>
        <SortingComponent sortingList={collectionSortingList}></SortingComponent>
      </div>

      <div className="collections">
        <Link to="/createCollection" className="collection" >
          <div className="mask_collection"></div>
          <div className="collection_image" style={{ backgroundImage: 'url(./img/add.svg)', backgroundSize: "30%" }}></div>
        </Link>
        {collections}
      </div>
      <div className="collections_pagination">
        <Pagination count={totalPages} onChange={(e, value) => dispatch({ type: "setPage", payload: value })} />
      </div>
    </PagedRequestContext.Provider>
  );
}