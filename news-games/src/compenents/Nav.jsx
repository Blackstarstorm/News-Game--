import React from 'react';
import { Link } from 'react-router-dom';
import oneup from "../oneup.mp3"


class Nav extends React.Component {
  constructor(props){
  super(props);
  }
  render() {
    let audioHome = new Audio(oneup);
  return (
    <nav>
      <Link id="home" to="/" onClick={async () => await audioHome.play()}>Home</Link>
      <h2 className="title">News Game-Plus</h2>
      
    </nav>
  )
}
}
export default Nav;