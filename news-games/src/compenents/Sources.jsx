import React from 'react';
import { Link, Route} from 'react-router-dom';
  
export default function Sources(props) {
  return (
    <section id="source">
      <div id="source-title">Pick a News Source </div>

<div id="ign">
  <input type="radio" name="source" value="ign"  onClick={props.handleClick}/> IGN
  </div>

<div id="polygon"> 
  <input type="radio" name="source" value="polygon"  onClick={props.handleClick}/> Polygon
    </div>
  </section>
  )
}