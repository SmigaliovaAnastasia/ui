import { FilterCategoryModel } from "./FilterCategoryModel";

export type FilterBarModel = {
  remainingFilter: string;
  filterCategories: Array<FilterCategoryModel>;
}