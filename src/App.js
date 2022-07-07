import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./page/Posts";
import Navbar from "./components/Navbar";
import Inspo from "./page/Inspo";
import Post from "./components/PostInner";
import Footer from "./components/Footer";
import Explainers from "./page/Explainers";
import Explainer from "./components/ExplainerInner";

function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
      </div>

      <Router>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/inspo" component={Inspo} />
          <Route path="/post/:id" component={Post} />
          <Route path="/explainer/:id" component={Explainer} />
          <Route path="/explainers" component={Explainers} />
        </Switch>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
