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


  /* Haetaan backendistä kyseisen kuukauden harjoitukset ja niiden id:t */  
  const dateData = {
      "Fri Sep 17 2021 00:00:00 GMT+0300" : 1,
      "Sat Sep 18 2021 00:00:00 GMT+0300" : 2 
    }
  /* Haetaan id:n perusteella harjoituksen data */  
  const trainingData = {
    1: {
      "Warm-up": {
        "20 min": "1x"
      },
      "Barbell-row": {
        "10x": "20kg",
        "10x": "25kg"
      }
    },
    2: {
      "Warm-up": {
        "15 min": "1x"
      },
      "Bench press": {
        "10x": "80kg",
        "5x": "90kg"
      }
    }
  }

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
            <Register authenticate={authenticate} />
          </Route>
          <SecuredRoute 
          path="/diary" 
          component={Diary} 
          isAuthenticated={isAuthenticated}
          trainingData={trainingData}
          >
          </SecuredRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
