import { SortingComponent } from "../../components/Sorting/SortingComponent"
import './Collections.css'
import { collectionSortingList } from "../../common/Constants/CollectionSorting/CollectionSortingList";
import { Pagination } from "@mui/material";
import { CollectionListComponent } from "../../components/Collections/CollectionListComponent";

export function Collections() {
  return(
    <div>
    <p className="header">My Collections</p>
        <div className="collections_browse_container">
            <div className="collection_properties">
                <div className="searchbar_container">
                    <input className="searchbar" type="text" placeholder="Search"/>
                    <img className="magnifier" src="/img/Magnifier.svg"/>
                </div>
            </div>
            <SortingComponent sortingList={collectionSortingList}></SortingComponent> 
        </div>

        <div className="collections">
            <div className="collection" >
                <div className="mask_collection"></div>
                <div className="collection_image" style={{backgroundImage: 'url(./img/add.svg)', backgroundSize: "20%"}}></div>
            </div>
            
            <CollectionListComponent collection={ {
              id : '',
              name : 'test',
              description: '',
              imageUrl: '/img/game1.jpg',
              gamesNumber: 12,
              favouriteGamesNumber: 4,
              applicationUserId: ''
            }
            }></CollectionListComponent>
        </div>
        <div className="collections_pagination">
          <Pagination count={10} />
        </div>
    </div>
  );
}