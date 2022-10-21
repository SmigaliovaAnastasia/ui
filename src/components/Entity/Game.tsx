export interface Game {
  id : number;
  imageUrl: string; 
  name: string;
  genre: string; 
  age: number;
  complexity : string; 
  minPlayers: number;
  maxPlayers: number;
  description: string;
  rating: number;
  copiesLeft : number;
}