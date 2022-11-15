import React, { useState } from "react";

export type FilterContent = {
  filters: string[]
  setFilters:(newFilters: string[]) => void
}

export const FilterContext = React.createContext<FilterContent>({filters: [], setFilters: () => {}});