import React, { ReactElement, useContext } from 'react';
import './Filters.css';
import { FilterBarModel } from '../../common/Models/FilterBarModels/FilterBarModel';
import { FilterCategoryComponent } from './FilterCategoryComponent';
import { PagedRequestContext } from '../../common/Contexts/PagedRequestContext';

export function FilterBarComponent(props: { filterBarModel: FilterBarModel }) {

  const { state, dispatch } = useContext(PagedRequestContext);
  var filterCategories = props.filterBarModel.filterCategories.map(c => { return <FilterCategoryComponent key={c.name} filterCategoryModel={c}></FilterCategoryComponent> });

  return (
    <div className="filters">
      <div className="head">
        <p>Filters</p>
        <img className="filtericons" onClick={() => dispatch({ type: "resetFilters", payload: props.filterBarModel.remainingFilter })} src="/img/clear.svg" />
      </div>
      <div className="line"></div>

      {filterCategories}
    </div>
  );
}