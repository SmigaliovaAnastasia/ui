import { FilterCategoryModel } from "./FilterCategoryModel";

export type FilterBarModel = {
  remainingFilters: string[];
  filterCategories: Array<FilterCategoryModel>;
}