import React from 'react';

export default function Profile ({ setAuthentication }) {
    return(
        <div>
            <button onClick={() => setAuthentication(false)}>Log out</button>
        </div>
    )
}