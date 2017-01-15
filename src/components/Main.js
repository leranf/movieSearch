require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

Main.defaultProps = {
};

export default Main;
