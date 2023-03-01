import React, { Component } from 'react';
import phrases from '../data/phrases.json';
import '../assets/Button.css';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    this.props.onChange(randomPhrase);
  }

  render() {
    return (
      <button className='button' onClick={this.handleClick}>
        Generate Fortune Cookie
      </button>
    );
  }
}

export default Button;
