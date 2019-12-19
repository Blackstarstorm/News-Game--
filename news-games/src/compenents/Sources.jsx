import React from 'react';
import coin from '../coin.mp3'
  
class Sources extends React.Component {
  

  render() {
    let audioCoin = new Audio(coin);
    return (
      <section id="source">

        <div id="ign">
          <input className="radio" type="radio"  value="ign" name="source" onClick={this.props.handleClick} onClick={async () =>
          await audioCoin.play()} /> IGN
  </div>

        <div id="polygon">
          <input className="radio" type="radio" value="polygon" name="source"  onClick={this.props.handleClick} onClick={async () =>
            await audioCoin.play()}/> Polygon
    </div>
      </section>
    )
  }
}
export default Sources;