import { GenreDto } from "../../common/Entities/GameDtos/GenreDto";
import { FilterCategoryModel } from "../../common/Models/FilterBarModels/FilterCategoryModel";
import { FilterForFilterBarModel } from "../../common/Models/FilterBarModels/FilterForFilterBarModel";
import { GenreService } from "../GenreService";

export const GetGenreCategoryForFilterBar = async (): Promise<FilterCategoryModel> => {
  const service = new GenreService;
  const filters: FilterForFilterBarModel[] = [];
  const genres = service.getGenres();
  const data = await genres;
  data.map(genre => filters.push({
    text: genre.name,
    multipleChoice: true,
    filters: [{
      filterProperty: "genres",
      filterOperator: "",
      value: genre.name
    }]
  }));
  return { name: "Genres", filters: filters };
};