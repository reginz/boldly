import './App.css';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />        
          </Switch>
      </Router>
    </div>
  );
}

export default App;
