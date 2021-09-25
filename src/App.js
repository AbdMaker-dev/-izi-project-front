import React from 'react';
import Home from './libs/ui/app/index';
import Login from './libs/ui/auth/Login';
import Singin from './libs/ui/auth/Singin';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";
import Presentation from './libs/ui/presentation';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Presentation} />
          <Route path="/login" component={Login} />
          <Route path="/singin" component={Singin} />
          <Route path="/app" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
