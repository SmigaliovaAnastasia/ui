import { PagedRequest } from "../Models/PagedRequest/PagedRequest"
import { Filter } from "../Models/PagedRequest/Filter";

export const defaultPagedRequest: PagedRequest =
{
  pageIndex: 1,
  pageSize: 10,
  sortingMethod: { sortingColumn: "id", direction: ''},
  filters: new Array<Filter>,
  forceUpdate: false
}

export const defaultPagedRequestWithFilter = (filters: Filter[]) : PagedRequest => {
  return {
    pageIndex: 1,
    pageSize: 10,
    sortingMethod: { sortingColumn: "id", direction: ''},
    filters: filters,
    forceUpdate: false
  }
}