import React from 'react';
import Form from './Form.js'
import './Hero.css';

export default class Hero extends React.Component {

  render() {
    return (
      <div id="hero">
        <div id="hero-top">
          <a className="logo" href="/#"><img className="logo" src="./images/logo.png" alt="Chonk Logo" /></a>
          <div id="blurb">
            <h1>URLs getting out of hand?</h1>
            <h2>With Chonk.tk, send urls you won't be ashamed of!</h2>
          </div>
        </div>
        <Form />
        <div id="hero-bottom"></div>
      </div>
    );
  }
}