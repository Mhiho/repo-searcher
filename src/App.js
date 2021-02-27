import React from "react";
import { Route, BrowserRouter as Router, HashRouter } from "react-router-dom";
import RepoSearcher from "./components/RepoSearcher";
import AppDescription from "./components/AppDescription";
import MathFunction from "./components/MathFunction";
import { ThemeProvider } from "./store/contextAPI";

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <Router>
          <Route path={`/description`} component={AppDescription} />
          <Route path={`/math`} component={MathFunction} />
          <Route exact path={`/`} component={RepoSearcher} />
        </Router>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
