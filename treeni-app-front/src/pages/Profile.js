import React from 'react';

// profile Route
export default function Profile ({ setAuthentication }) {
    return(
        <div>
            <button onClick={() => setAuthentication(false)}>Log out</button>
        </div>
    )
}