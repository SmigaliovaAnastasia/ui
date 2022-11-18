import { SortingListModel } from "../../Models/SortingListModels/SortingListModel";

export const collectionSortingList : SortingListModel = {
  sortings : [
    {
      value : "name_asc", 
      sortingName: "Name: A-Z"
    },
    {
      value : "name_desc", 
      sortingName: "Name: Z-A"
    },
    {
      value : "number_of_games_asc", 
      sortingName: "Number of Games: Low to High"
    },
    {
      value : "number_of_games_desc", 
      sortingName: "Number of Games: High to Low"
    },
    {
      value : "number_of_favourite_games_asc", 
      sortingName: "Number of liked Games: Low to High"
    },
    {
      value : "number_of_favourite_games_desc", 
      sortingName: "Number of liked Games: High to Low"
    },
  ]
}