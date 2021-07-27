import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SecuredRoute from './components/SecuredRoute';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Diary from './pages/Diary';

function App() {

  const [ isAuthenticated, setAuthentication ] = useState(false);

  function authenticate (e) {
    e.preventDefault()
    setAuthentication(true)
  }

  return (
    <div className="App">
      <Router>
        <Header />
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
