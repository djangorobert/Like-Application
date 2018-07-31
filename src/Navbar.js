import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends React.Component {
    render() {
      return (

    <div class="container">
      <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills pull-left">
          <h3 class="text-muted">Like Button Example</h3>
            <li role="presentation" class="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">About</a></li>
            <li role="presentation"><a href="#">Contact</a></li>
          </ul>
        </nav>
        
      </div>
      </div>
        
      );
    }
  }



export default Navbar;