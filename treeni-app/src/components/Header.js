import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <div id="header">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/diary">Diary</Link>
        </div>
    )
}