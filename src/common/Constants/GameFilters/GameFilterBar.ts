import { FilterBarModel } from "../../Models/FilterBarModels/FilterBarModel";
import { gameFilterCategories } from "./GameFilterCategories";

export const gameFilterBarModel: FilterBarModel = {
  remainingFilters: ["name", "collection_id", "!collection_id"],
  filterCategories: gameFilterCategories,
}