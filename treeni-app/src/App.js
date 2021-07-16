import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SecuredRoute from './components/SecuredRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Diary from './pages/Diary';

function App() {

  const [ isAuthenticated, setAuthentication ] = useState(false);

  function authenticate () {
    setAuthentication(true)
  }

  return (
    <div className="App">
      <Router>
        <Redirect to={{pathname:'/login'}}></Redirect>
        <Switch>
          <Route path="/login">
            <Login authenticate={authenticate} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <SecuredRoute path="/diary" component={Diary} isAuthenticated={isAuthenticated}></SecuredRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
