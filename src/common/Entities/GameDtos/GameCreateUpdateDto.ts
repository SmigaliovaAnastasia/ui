export type GameCreateUpdateDto = {
  name : string,
  description : string,
  rules : string,
  minNumOfPlayers : number,
  maxNumOfPlayers : number,
  minPalyerAge : number,
  minPlayingTimeMinutes : number,
  maxPlayingTimeMinutes : number,
  releaseDate : Date,
  imageUrl : string,
  gameSeriesId : string,
  complexityLevelId : string,
  genreIds : Array<string>
}