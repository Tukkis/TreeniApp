import React from 'react';
import { Link } from 'react-router-dom';

export default function Header ({ isAuthenticated }) {
    if(!isAuthenticated){
        return (
            <div id="header">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        )
    } else {
        return(
            <div id="header">
                <Link to="/diary">Diary</Link>
                <Link to="/new">Add new</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/profile" id="profile-link">Profile</Link>
            </div>
        )
    }
}