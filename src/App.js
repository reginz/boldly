import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./page/Posts";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
      </div>

      <Router>
        <Switch>
          <Route exact path="/" component={Posts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
