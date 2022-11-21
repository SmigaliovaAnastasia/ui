import { SortingListModel } from "../../Models/SortingListModels/SortingListModel";

export const reviewsSortingList: SortingListModel = {
  sortings: [
    {
      value: {
        sortingColumn: "userName",
        direction: "asc"
      },
      sortingName: "Name: A-Z"
    },
    {
      value: {
        sortingColumn: "userName",
        direction: "desc"
      },
      sortingName: "Name: Z-A"
    },
    {
      value: {
        sortingColumn: "rating",
        direction: "asc"
      },
      sortingName: "Rating: Worst rated"
    },
    {
      value: {
        sortingColumn: "rating",
        direction: "desc"
      },
      sortingName: "Rating: Top rated"
    },
  ]
}