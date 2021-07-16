import React, { useState } from 'react';

export default function Diary () {

    const [ action, setAction ] = useState(0);

    return(
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}