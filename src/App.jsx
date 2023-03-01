import React, { Component } from 'react';
import Button from './components/Button';
import FortuneCookie from './components/FortuneCookie';
import phrases from './data/phrases.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];

    this.state = {
      phrase: randomPhrase.phrase,
      author: randomPhrase.author,
      backgrounds: ['/fondo1.png', '/fondo2.png', '/fondo3.png', '/fondo4.png'],
      backgroundUrl: '/fondo1.png'
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    const randomBackgroundIndex = Math.floor(Math.random() * this.state.backgrounds.length);
    const randomBackgroundUrl = this.state.backgrounds[randomBackgroundIndex];

    this.setState({
      phrase: randomPhrase.phrase,
      author: randomPhrase.author,
      backgroundUrl: randomBackgroundUrl
    });
  }

  render() {
    return (
      <div className="app-container" style={{ backgroundImage: `url(${this.state.backgroundUrl})` }}>
        <div className="content-container">
          <FortuneCookie phrase={this.state.phrase} author={this.state.author} />
          <Button onChange={this.handleButtonClick} />
        </div>
      </div>
    );
  }
}

export default App;
