import React from 'react';
import { Link, Route } from 'react-router-dom';
import coin from '../coin.mp3'
  
class Sources extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let audioCoin = new Audio(coin);
    return (
      <section id="source">

        <div id="ign">
          <input className="radio" type="radio" name="source" value="ign" onClick={this.props.handleClick} onClick={async () =>
           await audioCoin.play()} /> IGN
  </div>

        <div id="polygon">
          <input className="radio" type="radio" name="source" value="polygon" onClick={this.props.handleClick} onClick={async () =>
            await audioCoin.play()}/> Polygon
    </div>
      </section>
    )
  }
}
export default Sources;