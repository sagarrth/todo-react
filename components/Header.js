import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Header () {
  const style = {
    textAlign: 'center'
  }
  return (
    <header>
      <Jumbotron>
        <h1 style={style}>Todo React</h1>
      </Jumbotron>
    </header>
  );
}

export default Header;
