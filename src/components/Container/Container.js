import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import { Home, About, Contacts } from '../';

class Container extends Component {
  render() {
    return (
      <div>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contacts' component={Contacts}/>
      </div>
    );
  }
}

export default Container;