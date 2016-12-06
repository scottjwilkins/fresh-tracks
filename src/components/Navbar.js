import React from 'react';
import { Link } from 'react-router';
export default () => {
  return (
    <div className="container-vert  fixed">
      <div className="container-horiz space-between navbar">
        <Link to="/">Fresh Weddings</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/sample">Sample Menu</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/submit">Let's get started</Link>
      </div>
        
    </div>
  )
}
