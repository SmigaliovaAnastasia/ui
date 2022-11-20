import React from "react";

export type GenresCheckboxContent = {
  genreIds: string[]
  setGenreIds: (genreIds : string[]) => void;
}

export const GenresCheckboxContext = React.createContext<GenresCheckboxContent>({ genreIds: [], setGenreIds: () => { } });