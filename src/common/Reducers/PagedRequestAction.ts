import { Filter } from "../Models/PagedRequest/Filter";

export type PagedRequestAction = 
| { type: 'setPage'; payload: number }
| { type: 'setPageSize'; payload: number }
| { type: 'setSorting'; payload: string }
| { type: 'setFilter'; payload: { filter: Filter; multipleChoice: boolean }}
| { type: 'resetFilters'; payload: string }
| { type: 'forceUpdate' };