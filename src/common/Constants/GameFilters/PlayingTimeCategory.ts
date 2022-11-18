import { FilterCategoryModel } from "../../Models/FilterBarModels/FilterCategoryModel";

export const playingTimeCategory : FilterCategoryModel = 
{
  name: "Playing time",
  filters: [
    {
      text: "0-30 min.",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "playingtime",
          filterOperator: ">",
          value: "0"
        },
        {
          filterProperty: "playingtime",
          filterOperator: "<",
          value: "35"
        }
      ]
    },

    {
      text: "30-60 min.",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "playingtime",
          filterOperator: ">",
          value: "25"
        },
        {
          filterProperty: "playingtime",
          filterOperator: "<",
          value: "65"
        }
      ]
    },

    {
      text: "1-2 h.",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "playingtime",
          filterOperator: ">",
          value: "55"
        },
        {
          filterProperty: "playingtime",
          filterOperator: "<",
          value: "125"
        }
      ]
    },

    {
      text: "3-5 h.",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "playingtime",
          filterOperator: ">",
          value: "175"
        },
        {
          filterProperty: "playingtime",
          filterOperator: "<",
          value: "305"
        }
      ]
    },

    {
      text: "5+ h.",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "playingtime",
          filterOperator: ">",
          value: "295"
        },
        {
          filterProperty: "playingtime",
          filterOperator: "<",
          value: "1500"
        }
      ]
    },
  ]
};