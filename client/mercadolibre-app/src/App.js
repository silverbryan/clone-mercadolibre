import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { route } from '../../../api/src/app';

function App() {
  return (
    <Switch>
      <Navbar />
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
