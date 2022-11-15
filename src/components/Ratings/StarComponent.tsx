import React from 'react';
import './Star.css';

export function StarComponent(props : {newClassName : string}) {
  return (
    <div className={"star " + props.newClassName}></div>
  );
}