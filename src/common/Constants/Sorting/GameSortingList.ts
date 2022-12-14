import { SortingListModel } from "../../Models/SortingListModels/SortingListModel";

export const gameSortingList: SortingListModel = {
  sortings: [
    {
      value: {
        sortingColumn: "name",
        direction: "asc"
      },
      sortingName: "Name: A-Z"
    },
    {
      value: {
        sortingColumn: "name",
        direction: "desc"
      },
      sortingName: "Name: Z-A"
    },
    {
      value: {
        sortingColumn: "releasedate",
        direction: "asc"
      },
      sortingName: "Release Date: New first"
    },
    {
      value: {
        sortingColumn: "releasedate",
        direction: "desc"
      },
      sortingName: "Release Date: Old first"
    },
    {
      value: {
        sortingColumn: "rating",
        direction: "asc"
      },
      sortingName: "Rating: Worst"
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