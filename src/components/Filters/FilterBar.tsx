import React, { ReactElement, useContext } from 'react';
import './Filters.css';
import { Filter } from './Filter';

export function FilterBar() {

  var filters : ReactElement[] = [];
  filters.push(<Filter key="players" name="Players"></Filter>);
  filters.push(<Filter key="age" name="Age"></Filter>);
  filters.push(<Filter key="playingtime" name="Playing time"></Filter>);

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