import './Filters.css';
import { useRef } from 'react';
import { FilterCategoryModel } from '../../common/Models/FilterBarModels/FilterCategoryModel';
import { FilterComponent } from './FilterComponent';

export function FilterCategoryComponent(props : {filterCategoryModel : FilterCategoryModel}) {
  const filterCategory = useRef<HTMLDivElement>(null);
  const arrow = useRef<HTMLImageElement>(null);
  var filters = props.filterCategoryModel.filters.map(f => {return <FilterComponent key={f.text} filterModel={f}></FilterComponent>})

  function handleclick() {
    if(filterCategory.current !== null && arrow.current !== null)
    {
      if(filterCategory.current.className === "hidden")
      {
        filterCategory.current.className = "";
        arrow.current.style.transform = "rotate(180deg)"
      }
      else
      {
        filterCategory.current.className = "hidden";
        arrow.current.style.transform = "rotate(0deg)"
      }
    }
  }

  return (
      <div className = "filterUnit">
        <div className="filter">
          <p  className="clickable" onClick={handleclick}>{props.filterCategoryModel.name}</p>
          <img alt="" className="filtericons" ref={arrow} src="./img/down.svg"/>
        </div>
        <div className="hidden" ref={filterCategory}>
          {filters}
        </div>
        <div className="line"></div>
      </div>
  );
}