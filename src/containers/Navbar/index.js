import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <a href="https://discordapp.com/oauth2/authorize?response_type=token&client_id=405952776787722267&scope=identify&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth">
        Login
      </a>
    );
  }
}

export default Navbar;
