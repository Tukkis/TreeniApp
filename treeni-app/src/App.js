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
import AddNew from './pages/AddNew';
import Profile from './pages/Profile';
import Stats from './pages/Statistics'

function App() {

  const [ isAuthenticated, setAuthentication ] = useState(true);

  
  function authenticate (e) {
    e.preventDefault()
    setAuthentication(true)
  }

  return (
    <div className="App">
      <Router>
        <Header isAuthenticated={isAuthenticated} />
        <Redirect to={{pathname:'/login'}}></Redirect>
        <Switch>
          <Route path="/login">
            <Login authenticate={authenticate} />
          </Route>
          <Route path="/register">
            <Register authenticate={authenticate} />
          </Route>
          <SecuredRoute 
          path="/diary" 
          component={Diary} 
          isAuthenticated={isAuthenticated}
          >
          </SecuredRoute>
          <SecuredRoute
          path="/new"
          component={AddNew}
          isAuthenticated={isAuthenticated}
          ></SecuredRoute>
          <SecuredRoute
          path="/statistics"
          component={Stats}
          isAuthenticated={isAuthenticated}
          ></SecuredRoute>
          <SecuredRoute
          path="/profile"
          component={Profile}
          isAuthenticated={isAuthenticated}
          setAuthentication={setAuthentication}
          ></SecuredRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
