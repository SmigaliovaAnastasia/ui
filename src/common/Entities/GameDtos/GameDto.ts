import { ComplexityLevelDto } from "./ComplexityLevelDto";
import { GameSeriesDto } from "./GameSeriesDto";
import { GenreDto } from "./GenreDto";

export interface GameDto {
  id : string,
  name : string, 
  description : string,
  rules : string
  minNumOfPlayers : number,
  maxNumOfPlayers : number,
  minPalyerAge : number,
  minPlayingTimeMinutes : number, 
  maxPlayingTimeMinutes : number, 
  releaseDate : Date,
  imageUrl : string, 
  rating: number,
  genreDtos : Array<GenreDto>, 
  gameSeriesDto: GameSeriesDto,
  complexityLevelDto : ComplexityLevelDto,
  reviewIds: Array<string>
}