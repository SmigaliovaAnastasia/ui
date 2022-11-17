import { Filter } from './Filter';
import { SortingMethod } from './SortingMethod';

export type PagedRequest = {
  pageIndex: number;
  pageSize: number;
  sortingMethod: SortingMethod;
  filters: Array<Filter>;
}