import { FilterCategoryModel } from "../../Models/FilterBarModels/FilterCategoryModel";

export const ageCategory : FilterCategoryModel = 
{
  name: "Age",
  filters: [
    {
      text: "0-6",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "age",
          filterOperator: ">",
          value: "0"
        },
        {
          filterProperty: "age",
          filterOperator: "<",
          value: "7"
        }
      ]
    },

    {
      text: "7-12",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "age",
          filterOperator: ">",
          value: "6",
        },
        {
          filterProperty: "age",
          filterOperator: "<",
          value: "13",
        },
      ]
    },

    {
      text: "13-17",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "age",
          filterOperator: ">",
          value: "12",
        },
        {
          filterProperty: "age",
          filterOperator: "<",
          value: "18",
        },
      ]
    },

    {
      text: "18+",
      multipleChoice: false,
      filters: [
        {
          filterProperty: "age",
          filterOperator: ">",
          value: "17",
        },
        {
          filterProperty: "age",
          filterOperator: "<",
          value: "100"
        },
      ]
    },
  ]
};