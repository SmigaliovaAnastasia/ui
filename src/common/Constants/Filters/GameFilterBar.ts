import { GetComplexityLevelCategoryForFilterBar } from "../../../services/Utils/GetComplexityLevelCategoryForFilterBar";
import { GetGenreCategoryForFilterBar } from "../../../services/Utils/GetGenreCategoriesForFilterBar";
import { FilterBarModel } from "../../Models/FilterBarModels/FilterBarModel";
import { gameFilterCategories } from "./GameFilterCategories";

export const gameFilterBarModel: FilterBarModel = {
  remainingFilters: ["name", "collection_id", "!collection_id"],
  filterCategories: gameFilterCategories,
}

export async function gameFilterBarModelWithGenresAndComplexityLevels() : Promise<FilterBarModel> {
  const genres = await GetGenreCategoryForFilterBar();
  const complexityLevels = await GetComplexityLevelCategoryForFilterBar();
  return {
    remainingFilters: ["name", "collection_id", "!collection_id"],
    filterCategories: [...gameFilterCategories, genres, complexityLevels]
  }
}