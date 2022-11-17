import { FilterForFilterBarModel } from "./FilterForFilterBarModel";

export type FilterCategoryModel = {
  name: string
  filters: Array<FilterForFilterBarModel>;
}