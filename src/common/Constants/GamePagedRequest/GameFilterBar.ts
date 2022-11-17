import { FilterBarModel } from "../../Models/FilterBarModels/FilterBarModel";
import { gameFilterCategories } from "./GameFilterCategories";

export const gameFilterBarModel : FilterBarModel = {
  remainingFilter: "name",
  filterCategories: gameFilterCategories,
}