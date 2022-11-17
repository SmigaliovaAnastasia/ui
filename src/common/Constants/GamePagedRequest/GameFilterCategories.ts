import { FilterCategoryModel } from "../../Models/FilterBarModels/FilterCategoryModel";
import { ageCategory } from "./AgeCategory";
import { playersCategory } from "./PlayersCategory";
import { playingTimeCategory } from "./PlayingTimeCategory";

export const gameFilterCategories : FilterCategoryModel[] = [
  ageCategory,
  playingTimeCategory,
  playersCategory
];