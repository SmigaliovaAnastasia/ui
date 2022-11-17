import './Filters.css';
import { useEffect, useRef } from 'react';
import { useContext } from 'react';
import { PagedRequestContext } from '../../common/Contexts/PagedRequestContext';
import { FilterForFilterBarModel } from '../../common/Models/FilterBarModels/FilterForFilterBarModel';

export function FilterComponent(props : {filterModel : FilterForFilterBarModel}) {

  const filterOption = useRef<HTMLDivElement>(null);
  const {state, dispatch} = useContext(PagedRequestContext);

  function handleFilterClick() 
  {
    props.filterModel.filters.map(f => 
      dispatch({ 
        type: "setFilter", 
        payload: { filter: f, multipleChoice: props.filterModel.multipleChoice }
      })
    );
  }

  useEffect(() => {
    if(filterOption.current)
    {
      let isIncluded = true;
      props.filterModel.filters.map(f => {
        if(!state.filters.includes(f))
        {
          isIncluded = false;
        }
      });
      if(isIncluded)
      {
        filterOption.current.className = "filterMask selected";
      }
      else
      {
        filterOption.current.className = "filterMask notSelected";
      }
    }
  }, [state.filters] );
  

  return (
          <div className="filter" >
            <div className='filterMask notSelected' ref={filterOption}></div>
            <p  className="clickable" onClick={handleFilterClick}>{props.filterModel.text}</p>
          </div>
  );
}