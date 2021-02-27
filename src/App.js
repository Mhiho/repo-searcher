import React from "react";
import { Route, HashRouter } from "react-router-dom";
import RepoSearcher from "./components/RepoSearcher";
import AppDescription from "./components/AppDescription";
import MathFunction from "./components/MathFunction";
import { ThemeProvider } from "./store/contextAPI";

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
          <Route path={`/`} component={RepoSearcher} />
          <Route path={`/description`} component={AppDescription} />
          <Route path={`/math`} component={MathFunction} />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
