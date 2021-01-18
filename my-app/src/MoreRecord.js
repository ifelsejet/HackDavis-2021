import React, { Component } from 'react';
//import './App.css';
import VideoSelector from './components/VideoSelector';

class MoreRecord extends Component {
  render() {
    console.log("Rendering..");

    return (
      <div className="App">
        <VideoSelector />
        <h2> Bro please</h2>
      </div>
    );
    
  }
}

export default MoreRecord;