import { SortingListModel } from "../../Models/SortingListModels/SortingListModel";

export const reviewsSortingList: SortingListModel = {
  sortings: [
    {
      value: "username_asc",
      sortingName: "Name: A-Z"
    },
    {
      value: "username_desc",
      sortingName: "Name: Z-A"
    },
    {
      value: "rating_asc",
      sortingName: "Rating: Worst rated"
    },
    {
      value: "rating_desc",
      sortingName: "Rating: Top rated"
    },
  ]
}