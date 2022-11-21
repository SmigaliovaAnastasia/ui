import React from "react";

export type GameSeriesContent = {
  gameSeriesId: string
  setGameSeriesId: (gameSeriesId : string) => void;
}

export const GameSeriesContext = React.createContext<GameSeriesContent>({ gameSeriesId: '', setGameSeriesId: () => { } });