export interface GameListDto {
  id : string;
  imageUrl: string; 
  name: string;
  genres : Array<string>, 
  minPalyerAge: number;
  complexityLevelName : string; 
  minNumOfPlayers: number;
  maxNumOfPlayers: number;
  description: string;
  maxPlayingTimeMinutes : number;
  minPlayingTimeMinutes : number; 
}