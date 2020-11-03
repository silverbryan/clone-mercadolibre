import React from 'react';
import { Switch, Link, Route, BrowserRouter } from 'react-router-dom';
//components
import Navbar from './components/Navbar';
//pages
import HomePage from './pages/homePage';
import SearchPage from './pages/searchPage';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Navbar />
        <HomePage />
      </Switch>
    </div>

  );
}

export default App;
