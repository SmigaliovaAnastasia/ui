import { PagedRequest } from "./PagedRequest"
import { Filter } from "./Filter";

export const defaultPagedRequest : PagedRequest =
{
  pageIndex : 1,
  pageSize : 10,
  sortingMethod : { value : "id"},
  filters : new Array<Filter>,
}