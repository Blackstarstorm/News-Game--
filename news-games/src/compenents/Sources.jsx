import React from 'react';
import { Link, Route } from 'react-router-dom';
import coin from '../coin.mp3'
  
export default function Sources(props) {
  return (
    <section id="source">

<div id="ign">
  <input className="radio" type="radio" name="source" value="ign"  onClick={props.handleClick}/> IGN
  </div>

<div id="polygon"> 
  <input className="radio" type="radio" name="source" value="polygon"  onClick={props.handleClick}/> Polygon
    </div>
  </section>
  )
}