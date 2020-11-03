import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
//components
import Navbar from './components/Navbar';
//pages
import HomePage from './pages/homePage';
import SearchPage from './pages/searchPage';

import './App.css';

function App() {
  return (
    <Switch>
      <Navbar />
      <SearchPage />
    </Switch>
  );
}

export default App;
