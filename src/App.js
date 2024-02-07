import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/hello'>
          <h1>hello</h1>
        </Route>
        <Route path='/movie'>
          <Detail />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
