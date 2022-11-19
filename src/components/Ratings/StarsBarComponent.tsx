import React, { ReactElement } from 'react';
import './Star.css';
import { StarComponent } from './StarComponent';

export function StarsBarComponent(props: { rating: number }) {
  var stars: ReactElement[] = [];
  var newClassName = '';

  for (var i = 1; i < 6; i++) {
    newClassName = i <= props.rating ? 'purple' : i > Math.round(props.rating) ? 'black' : 'half_purple';
    stars.push(<StarComponent key={i} newClassName={newClassName}></StarComponent>);
  }

  return (
    <div className="stars">{stars}</div>
  );
}