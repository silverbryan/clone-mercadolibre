import './App.css';
import { Switch, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

//pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <Switch>
      <Navbar />
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
