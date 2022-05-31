import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./page/Posts";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Posts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
