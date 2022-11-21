import { SortingListModel } from "../../Models/SortingListModels/SortingListModel";

export const collectionSortingList: SortingListModel = {
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
        sortingColumn: "number_of_games",
        direction: "asc"
      },
      sortingName: "Number of Games: Low to High"
    },
    {
      value: {
        sortingColumn: "number_of_games",
        direction: "desc"
      },
      sortingName: "Number of Games: High to Low"
    },
    {
      value: {
        sortingColumn: "number_of_favourite_games",
        direction: "asc"
      },
      sortingName: "Number of liked Games: Low to High"
    },
    {
      value: {
        sortingColumn: "number_of_favourite_games",
        direction: "desc"
      },
      sortingName: "Number of liked Games: High to Low"
    },
  ]
}