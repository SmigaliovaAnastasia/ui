import { PagedRequest } from "../Models/PagedRequest/PagedRequest"
import { Filter } from "../Models/PagedRequest/Filter";

export const defaultPagedRequest : PagedRequest =
{
  pageIndex : 1,
  pageSize : 10,
  sortingMethod : { value : "id"},
  filters : new Array<Filter>,
}