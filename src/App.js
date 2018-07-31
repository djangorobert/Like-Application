import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Avatar from './Avatar';
class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {count: this.props.start || 0}


    this.inc = this.inc.bind(this);
  }

  inc() {
    this.setState({
      count: this.state.count + 1
    });
  }


  render() {
    return (
      <center><div>
        <Navbar />
        
        <Avatar />
        <button onClick={this.inc}>like</button>

        <div>{this.state.count}</div>
      </div></center>
    );
  }
}

export default App;