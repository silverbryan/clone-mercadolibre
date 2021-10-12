import React from 'react';
import { Switch, Route } from 'react-router-dom';
//components
import Navbar from './components/Navbar';
//pages
import HomePage from './pages/homePage';
import SearchPage from './pages/searchPage';
import ProductDetailPage from './pages/productDetailPage';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/product/:id" component={ProductDetailPage} />
      </Switch>
    </div>

  );
}

export default App;
