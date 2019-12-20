import React from 'react';


class Sources extends React.Component {


  render() {

    return (
      <section id="source">

        <div id="ign">
          <input className="radio" type="radio" value="ign" name="source" onClick={this.props.handleClick}
          /> IGN
  </div>

        <div id="polygon">
          <input className="radio" type="radio" value="polygon" name="source" onClick={this.props.handleClick}
          /> Polygon
    </div>
      </section>
    )
  }
}
export default Sources;