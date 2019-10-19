import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div id='header'>
      <Link id="home" to="/">Home</Link>
      <h1>News Game Plus</h1>

      <form>
        <input type="text"
          placeholder=
          "Game series(i.e. pokemon)"
        />
        <input type="submit" value="Let's A Go" onClick={props.handleClick}/>
      </form>

    </div>
  )
} 