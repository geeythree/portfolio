import './App.css';
import { About, Contact, Home } from './views';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
