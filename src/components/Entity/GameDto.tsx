export interface GameDto {
  gameId : number;
  name: string;
  minPalyerAge: number;
  minNumOfPlayers: number;
  maxNumOfPlayers: number;
  description: string;
  rules: string;
  playingTime: string;
  releaseDate: Date;
}