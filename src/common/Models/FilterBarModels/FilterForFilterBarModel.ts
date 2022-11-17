import { Filter } from "../PagedRequest/Filter";

export type FilterForFilterBarModel = {
  text: string;
  multipleChoice: boolean;
  filters: Filter[];
}