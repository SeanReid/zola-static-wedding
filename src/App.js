import React, { Component } from 'react';
import Palmier1White from './assets/images/Palmier1-White.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="nav">
          <h5 className="date">March 30, 2017</h5>
          <h5 className="location">Memphis</h5>
          <h5 className="hashtag">#CynthiaandWilliam</h5>
        </div>
        <h1 className="col-md-12 header">Cynthia & William</h1>
        <div className="row main-photo"><h1>We're Getting Married!</h1></div>
        <div className="main-content">
          <div className="row">
            <div className="col-md-6 left-col-text">
              <img src={Palmier1White} className="palmier-white"/>
              <div className="left-title">How we met</div>
              <div className="left-date">3.05.17</div>
            </div>
            <div className="col-md-6 right-col-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra dolor sit amet dui finibus, 
              vitae sagittis dolor suscipit. Aenean accumsan mollis lacus sed sagittis. Praesent lorem urna, efficitur nec enim in, 
              pretium hendrerit justo. Morbi mollis, enim ut sagittis tempus, arcu nisi finibus magna, non ultrices arcu elit sed enim.
            </div>
          </div>
          <div className="mobile-bar"></div>
          <div className="row">
            <div className="col-md-6 left-col-text">
              <img src={Palmier1White} className="palmier-white"/>
              <div className="left-title">The Proposal</div>
              <div>3.05.17</div>
            </div>
            <div className="col-md-6 right-col-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra dolor sit amet dui finibus, 
              vitae sagittis dolor suscipit. Aenean accumsan mollis lacus sed sagittis. Praesent lorem urna, efficitur nec enim in, 
              pretium hendrerit justo. Morbi mollis, enim ut sagittis tempus, arcu nisi finibus magna, non ultrices arcu elit sed enim.
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default App;
