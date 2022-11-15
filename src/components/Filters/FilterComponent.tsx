import './Filters.css';
import { useRef } from 'react';
import { useContext } from 'react';
import { FilterContext } from '../../common/Contexts/FilterContext';

export function FilterComponent(props : {name : string}) {
  const filter = useRef<HTMLDivElement>(null);
  const arrow = useRef<HTMLImageElement>(null);
  const {filters, setFilters} = useContext(FilterContext);

  function handleclick() {
    if(filter.current !== null && arrow.current !== null)
    {
      if(filter.current.className === "hidden")
      {
        filter.current.className = "";
        arrow.current.style.transform = "rotate(180deg)"
      }
      else
      {
        filter.current.className = "hidden";
        arrow.current.style.transform = "rotate(0deg)"
      }
    }
  }

  const filterOption = useRef<HTMLDivElement>(null);
  
  function handleFilterClick() 
  {
    if(filterOption.current != null)
    {
      let newFilters = [...filters];
      let index = newFilters.indexOf(props.name);
      if(index !== -1)
      {
        filterOption.current.style.backgroundColor = "transparent";
        newFilters.splice(index, 1);
      }
      else
      {
        newFilters.push(props.name);
        filterOption.current.style.backgroundColor = "#242424";
      }
      setFilters(newFilters); 
    }
  }
  

  return (
      <div className = "filterUnit">
        <div className="filter">
          <p  className="clickable" onClick={handleclick}>{props.name}</p>
          <img alt="" className="filtericons" ref={arrow} src="./img/down.svg"/>
        </div>
        <div className="hidden" ref={filter}>
          <div className="filter" >
            <div className='filterMask' ref={filterOption}></div>
            <p  className="clickable" onClick={handleFilterClick}>Insert {props.name}</p>
          </div>
        </div>
        <div className="line"></div>
      </div>
  );
}