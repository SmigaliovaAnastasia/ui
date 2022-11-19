export type GameListDto = {
  id: string;
  name: string;
  description: string;
  minNumOfPlayers: number;
  maxNumOfPlayers: number;
  minPalyerAge: number;
  minPlayingTimeMinutes: number;
  maxPlayingTimeMinutes: number;
  imageUrl: string;
  rating: number;
  complexityLevelName: string;
  genres: Array<string>,
}

