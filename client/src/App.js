import React from 'react';
import { Switch, Route } from 'react-router-dom';
//components
import Navbar from './components/Navbar';
//pages
import HomePage from './pages/homePage';

import './App.css';

function App() {
  return (
    <Switch>
      <Navbar />
      <Route exact path="/home" component={HomePage} />
    </Switch>
  );
}

export default App;
