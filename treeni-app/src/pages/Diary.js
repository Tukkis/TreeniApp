import React, { useState } from 'react';
import Form from './Form';

export default function Diary () {

    const [ action, setAction ] = useState(0);

    return(
        <div>
           <Form /> 
        </div>
    )
}