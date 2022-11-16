import React, { useState } from "react";
import { Filter } from "../Models/Filter";

export type FilterContent = {
  filterss: Array<string>
  setFilters:(newFilters: Array<string>) => void
}

export const FilterContext = React.createContext<FilterContent>({filterss: [], setFilters: () => {}});