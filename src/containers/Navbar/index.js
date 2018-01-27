import React, { Component } from 'react';

import './style.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar__container">
        <ul className="navbar__brand">
          <li className="navbar__brand-logo"><i class="material-icons">volume_mute</i></li>
          <li className="navbar__brand-name">Mutext</li>
        </ul>
        <ul>
          <li>
            <a href="https://discordapp.com/oauth2/authorize?response_type=token&client_id=405952776787722267&scope=identify&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth">
              <button class="uk-button uk-button-primary">Log in</button>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
