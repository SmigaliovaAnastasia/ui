import { FilterCategoryModel } from "../../Models/FilterBarModels/FilterCategoryModel";

export const playersCategory: FilterCategoryModel =
{
  name: "Players",
  filters: [
    {
      text: "1-2",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "players",
          filterOperator: ">",
          value: "0"
        },
        {
          filterProperty: "players",
          filterOperator: "<",
          value: "3"
        }
      ]
    },

    {
      text: "2-4",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "players",
          filterOperator: ">",
          value: "1",
        },
        {
          filterProperty: "players",
          filterOperator: "<",
          value: "5",
        },
      ]
    },

    {
      text: "5-10",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "players",
          filterOperator: ">",
          value: "4",
        },
        {
          filterProperty: "players",
          filterOperator: "<",
          value: "11",
        },
      ]
    },

    {
      text: "10+",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "players",
          filterOperator: ">",
          value: "9",
        },
        {
          filterProperty: "players",
          filterOperator: "<",
          value: "100",
        },
      ]
    },
  ]
};