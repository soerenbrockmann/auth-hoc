import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Header from '../containers/header';
import Resources from './resources';
import requireAuth from '../containers/requireAuth';

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/resources" component={requireAuth(Resources)} />
    </div>
  );
};

export default App;