import React from 'react';
import Nav from './Nav'
import mario from '../mario.mp3';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    
  }
    render() {
      let audioMario = new Audio(mario);
  
      return (
        <section id='hero'>
          <div id='hero-image'>
    
            <form onSubmit={this.props.handleSubmit}>
              <input id="search-bar" type="text"
                placeholder=
                "Type Topic Here(i.e. pokemon)" onChange={this.props.handleChange}
              />
              <button id="submit" onClick={async () => await audioMario.play()}>
                Here We Go
        </button>

      
            </form>
          </div>

        </section>
      )
    }
}
export default Hero;