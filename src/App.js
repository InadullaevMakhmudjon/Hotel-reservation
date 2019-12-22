import React from 'react';
import Auth from './views/Auth/Auth';
import Hotels from './views/Home/Home';
import Form from './views/Form/Form';
import Home from './views/Hotel/Hotel';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Auth}/>
          <Route path='/home/:name' component={Home}/>
          <Route exact path="/hotels" component={Hotels}/>
          <Route path="/hotels/:id" component={Form}/>
      </Switch>
    </Router>
  );
}

export default App;
