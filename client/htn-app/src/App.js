import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './views/LandingPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={LandingPage}></Route>
          <Route path="/login"></Route>
          <Route path="/register"></Route>
          <Route path="/profile"></Route>
          <Route path="/recruiter"></Route>
          <Route path="/matches"></Route>
          <Route path="/swipe"></Route>
          <Route path="/chat/:id"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
