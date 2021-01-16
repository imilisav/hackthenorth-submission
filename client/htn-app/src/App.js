import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/"></Route>
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
