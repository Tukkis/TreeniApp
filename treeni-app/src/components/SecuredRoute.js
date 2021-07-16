import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

function SecuredRoute(props){
    return(
      <Route path={props.path} render={data=>props.isAuthenticated?(
        <props.component {...data}></props.component>):
        (<Redirect to={{pathname:'/login'}}></Redirect>)}></Route>
        )
}

export default SecuredRoute