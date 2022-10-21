import React, { ReactElement } from 'react';
import './Star.css';
import {Star} from './Star';

export function StarsBar(props : {rating : number}) {
  var stars : ReactElement[] = [];
  var newClassName = '';

  for(var i = 1; i < 6; i++)
  {
    newClassName = i <= props.rating ? 'purple' : i > Math.round(props.rating) ? 'black' : 'half_purple';
    stars.push(<Star key = {i} newClassName={newClassName}></Star>);
  }

  return (
    <div className="stars">{stars}</div>
  );
}