import React, { useState } from 'react'

export default function Form () {
    
    const [ formValue, setFormValue ] = useState(null)
    const [ value, setValue ] = useState('')

    function handleChange(e){
        console.log(e.target.value)
        setValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(value)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange}/>
                </label>
                <label>
                    Bench:
                    <input type="text" name="bench" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}