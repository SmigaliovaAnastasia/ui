import React from "react";

export type GameForceUpdateContent = {
  update: boolean;
  setUpdate: (update: boolean) => void;
}

export const GameForceUpdateContext = React.createContext<GameForceUpdateContent>({ update: false, setUpdate: () => { } });