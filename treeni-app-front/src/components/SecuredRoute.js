import React, { useState } from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

// Routes that need authentication

function SecuredRoute(props){

  const [ calendarDate, calendarDateChange ] = useState(new Date());

    return(
      <Route path={props.path} render={data=>props.isAuthenticated?(
        <props.component {...data} calendarDate={calendarDate} calendarDateChange={calendarDateChange} setAuthentication={props.setAuthentication}></props.component>):
        (<Redirect to={{pathname:'/login'}}></Redirect>)}></Route>
        )
}

export default SecuredRoute