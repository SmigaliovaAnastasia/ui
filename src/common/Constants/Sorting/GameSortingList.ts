import { SortingListModel } from "../../Models/SortingListModels/SortingListModel";

export const gameSortingList: SortingListModel = {
  sortings: [
    {
      value: "name_asc",
      sortingName: "Name: A-Z"
    },
    {
      value: "name_desc",
      sortingName: "Name: Z-A"
    },
    {
      value: "releasedate_asc",
      sortingName: "Release Date: New first"
    },
    {
      value: "releasedate_desc",
      sortingName: "Release Date: Old first"
    },
    {
      value: "rating_asc",
      sortingName: "Rating: Worst"
    },
    {
      value: "rating_desc",
      sortingName: "Rating: Top rated"
    },
  ]
}