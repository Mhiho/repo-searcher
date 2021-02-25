import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import RepoSearcher from "./components/RepoSearcher";
import AppDescription from "./components/AppDescription";
import MathFunction from "./components/MathFunction";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`} component={RepoSearcher} />
        <Route path={`/description`} component={AppDescription} />
        <Route path={`/math`} component={MathFunction} />
      </Switch>
    </Router>
  );
}

export default App;
