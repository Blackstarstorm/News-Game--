import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link id="home" to="/">Home</Link>
      <h2>News Game Plus</h2>
      
    </nav>
  )
}