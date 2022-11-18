import { defaultPagedRequest } from "../Constants/DefaultPagedRequest";
import { PagedRequest } from "../Models/PagedRequest/PagedRequest";
import { PagedRequestAction } from "./PagedRequestAction";
import { Filter } from "../Models/PagedRequest/Filter";


function setFilter(filters : Filter[], filter: Filter, multipleChoice: boolean): Filter[] {
  
  let existingFilterIndex = filters.indexOf(filter);
  if( existingFilterIndex !== -1)
  {
    filters.splice(existingFilterIndex, 1);
    return filters;
  }
  else {
    if( !multipleChoice )
    {
      let previousFilter = filters.find( 
        e => e.filterProperty === filter.filterProperty 
        && e.filterOperator === filter.filterOperator
      );
      
      if( previousFilter )
      {
        filters.splice(filters.indexOf(previousFilter), 1);
      }
    }
    
    filters.push(filter)
    return filters;
  }
}

function resetFilters(filters: Filter[], remainingFilterName: string)
{
  let remainingFilter = filters.find(f => f.filterProperty === remainingFilterName);
  return remainingFilter ? [ remainingFilter ] : [];
}

export const pagedRequestReducer = (state : PagedRequest, action : PagedRequestAction): PagedRequest => {
  switch (action.type) {
    case 'setPage':
      return { ...state,  pageIndex : action.payload };
    case 'setPageSize':
      return { ...state, pageSize : action.payload };
    case 'setSorting':
      return { ...state, sortingMethod: { value : action.payload }};
    case 'setFilter':
      return { 
        ...state,
        filters: setFilter([...state.filters], action.payload.filter, action.payload.multipleChoice) 
      };
    case 'resetFilters':
      return { ...state, filters: resetFilters([...state.filters], action.payload) };
    case 'forceUpdate': 
      return { ...state, forceUpdate: !(state.forceUpdate) };
    default:
      return state;
  }
}