import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import RepoSearcher from "./components/RepoSearcher";
import AppDescription from "./components/AppDescription";
import MathFunction from "./components/MathFunction";
import PageNotFound from "./components/PageNotFound";
import { ThemeProvider } from "./store/contextAPI";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route path={`/`} component={RepoSearcher} />
          <Route path={`/description`} component={AppDescription} />
          <Route path={`/math`} component={MathFunction} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
