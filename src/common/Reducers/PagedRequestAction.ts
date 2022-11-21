import { Filter } from "../Models/PagedRequest/Filter";
import { SortingMethod } from "../Models/PagedRequest/SortingMethod";

export type PagedRequestAction =
  | { type: 'setPage'; payload: number }
  | { type: 'setPageSize'; payload: number }
  | { type: 'setSorting'; payload: SortingMethod }
  | { type: 'setFilter'; payload: { filter: Filter; multipleChoice: boolean } }
  | { type: 'resetFilters'; payload: string[] }
  | { type: 'forceUpdate' }
  | { type: 'reset' };