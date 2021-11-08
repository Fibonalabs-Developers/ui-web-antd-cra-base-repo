import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './pages/About';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
