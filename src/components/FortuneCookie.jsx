import React, { Component } from 'react';
import '../assets/FortuneCookie.css';

class FortuneCookie extends Component {
  render() {
    return (
      <div className='fortune-cookie-container'>
        <p className='fortune-cookie-phrase'>{this.props.phrase}</p>
        <p className='fortune-cookie-author'>{this.props.author}</p>
      </div>
    );
  }
}

export default FortuneCookie;
