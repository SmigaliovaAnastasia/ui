import { GenreDto } from "../../common/Entities/GameDtos/GenreDto";
import { FilterCategoryModel } from "../../common/Models/FilterBarModels/FilterCategoryModel";
import { FilterForFilterBarModel } from "../../common/Models/FilterBarModels/FilterForFilterBarModel";
import { ComplexityLevelService } from "../ComplexityLevelService";
import { GenreService } from "../GenreService";

export const GetComplexityLevelCategoryForFilterBar = async (): Promise<FilterCategoryModel> => {
  const service = new ComplexityLevelService;
  const filters: FilterForFilterBarModel[] = [];
  const complexityLevels = service.getComplexityLevels();
  const data = await complexityLevels;
  data.map(c => filters.push({
    text: c.name,
    multipleChoice: false,
    filters: [{
      filterProperty: "complexitylevel",
      filterOperator: "",
      value: c.name
    }]
  }));
  return { name: "Complexity Levels", filters: filters };
};