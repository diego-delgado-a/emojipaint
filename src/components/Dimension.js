import React from 'react';

const Dimension = props => (
  <div>
    <label htmlFor={props.label}></label>
    <input type="number" name={props.label} id={props.label} defaultValue="10" />
  </div>
);

export default Dimension;