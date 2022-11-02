import { ComplexityLevelDto } from "./ComplexityLevelDto";
import { GameSeriesDto } from "./GameSeriesDto";
import { GenreDto } from "./GenreDto";

export interface GameDto {
  complexityLevelDto : ComplexityLevelDto,
  gameSeriesDto: GameSeriesDto,
  description : string,
  id : string,
  genreDtos : Array<GenreDto>, 
  imageUrl : string, 
  maxNumOfPlayers : number,
  minNumOfPlayers : number,
  minPalyerAge : number,
  name : string, 
  maxPlayingTimeMinutes : number, 
  minPlayingTimeMinutes : number, 
  releaseDate : Date,
  rules : string
}