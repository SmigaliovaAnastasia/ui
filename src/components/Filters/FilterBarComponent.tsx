import React, { ReactElement, useContext } from 'react';
import './Filters.css';
import { FilterComponent } from './FilterComponent';

export function FilterBarComponent() {

  var filters : ReactElement[] = [];
  filters.push(<FilterComponent key="players" name="Players"></FilterComponent>);
  filters.push(<FilterComponent key="age" name="Age"></FilterComponent>);
  filters.push(<FilterComponent key="playingtime" name="Playing time"></FilterComponent>);

  return (
    <div className="filters">
      <div className="head">
          <p>Filters</p>
          <img className="filtericons" src="./img/clear.svg"/>
      </div>
      <div className="line"></div>
      {filters}
    </div>
  );
}