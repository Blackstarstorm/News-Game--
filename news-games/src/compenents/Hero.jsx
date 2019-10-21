import React from 'react';
import Nav from './Nav'


export default function Hero(props) {
  return (
    <section id='hero'>
      <div id='hero-image'>
    
      <form onSubmit={props.handleSubmit}>
        <input id="search-bar" type="text"
          placeholder=
          "Type title here(i.e. pokemon)" onChange={props.handleChange}
        />
        <button id="submit">
          Let's a Go
        </button>

      
      </form>   
      </div>

    </section>
  )
}