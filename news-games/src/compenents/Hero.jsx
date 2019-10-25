import React from 'react';
import Nav from './Nav'
import mario from '../mario.mp3';
import ps2 from '../ps2.mp3';
import psp from '../psp.mp3';
import gb from '../gb.mp3';
import sega from '../sega.mp3';
import gba from '../gba.mp3';
import xbox from '../xbox.mp3';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    
  }
    render() {
      let audioMario = new Audio(mario);
      let audioPS2 = new Audio(ps2);
      let audioPSP = new Audio(psp);
      let audioSega = new Audio(sega);
      let audioGb = new Audio(gb);
      let audioGba = new Audio(gba);
      let audioXbox = new Audio(xbox);
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
            
          <div id="sounds">
            <div className="sound">
              <input className="button" type="radio" name="games" onClick={async () => await audioPS2.play()} />
            </div>

            <div className="sound">
              <input className="button" type="radio" name="games" onClick={async () => await audioPSP.play()}/>
            </div>
            <div className="sound">
              <input className="button" type="radio"
                name="games" onClick={async () => await audioGba.play()}/>
            </div>
            <div className="sound">
              <input className="button" type="radio" name="games" onClick={async () => await audioSega.play()}/>
            </div>
            <div className="sound">
              <input className="button" type="radio" name="games"
                onClick={async () => await audioGb.play()}/>
            </div>
            <div className="sound">
              <input className="button" type="radio" name="games" onClick={async () => await audioXbox.play()}/>
            </div>

            </div>
          </div>

        </section>
      )
    }
}
export default Hero;